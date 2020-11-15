//@ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Publish from "./Publish";
import Post from './Post';
import axios from 'axios';
import AVATAR_LIST from "../config/CONSTANTS";
import LoadingData from '../components/LoadingData';
import _ from 'lodash';

export default () => {

    const version = 1;
    const [list,setList] = useState([]);





    function getMore() {
        axios.get(`/api/article/list/page?page=${list.length/20+1}`,{
            withCredentials: true,
            headers:{
                'Access-Control-Allow-Origin': '*'
            }
        }).then((result)=>{
            if(result.data){
                const { articleList, page} = result.data.data;
                if(list.length/20 < page){
                    setList(list.concat(articleList));
                }

            }
        })
    }


    function getScrollTop() {
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }
     //获取当前可视范围的高度
     function getClientHeight() {
        let clientHeight = 0;

        if (document.body.clientHeight && document.documentElement.clientHeight) {
             clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }
     function getScrollHeight(){
        return (Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    }

    useEffect(()=>{
        getMore();
    },[])
   const debouncedSave =  _.debounce(() => {
        if(getScrollTop() + getClientHeight() >= getScrollHeight()){
            getMore();
        }
    },500)
    useEffect(function () {
        document.body.addEventListener('scroll',debouncedSave);
        return ()=>{
            document.body.removeEventListener('scroll',debouncedSave);
        }
    },[list])

    return <div className={'container'} >
        <div style={{
            width: '100%',
            borderBottom: '1px solid #8080803b',
            // position: 'fixed'
        }}>
            {
                version === 1 ?
                    <div className={'list'}>
                        <span className={'text'}>热门频道</span>
                        {
                            Object.keys(AVATAR_LIST).map((key)=>{
                                return (<div className={'item'} >
                                    <img src={AVATAR_LIST[key]} className={'img'}  width={60} height={60}/>
                                    <span>{key}</span>
                                </div>)
                            })
                        }

                    </div> :
                    <div style={{display: 'flex'}}>
                        <img width={'100'}
                             height={'100'}
                             style={{
                                 borderRadius: '50px',
                                 padding: '8px 0 0 13px',
                                 margin: '10px'
                             }}
                             src={'/image.jpg'}
                        />
                        <Publish></Publish>
                    </div>
            }

        </div>
        {
            list.length !== 0?
            list.map((v) => {
                return <Post {...v}></Post>
            }):<LoadingData></LoadingData>
        }
        <div>
        </div>
        <style jsx>{`
        .container{
            margin-left: 250px;
            width: 100%;
            @media only screen
            and (max-device-width : 768px){
              margin-left: 0px;
            }
        }
        .list{
            display: flex;
            color: white;
            align-items:center;
            padding: 0 10px;
            @media only screen
            and (max-device-width : 768px){
                  overflow-x:auto;
                  width:100vw;
            }
            >span{
                font-size:25px;
                margin-right:15px;
                color:yellow;
                @media only screen
                and (max-device-width : 768px){
                  display:none;
                }
            }
            .item{
                padding:10px;
                display: flex;
                flex-direction: column;
                .img{
                    border-radius:30px;
                    background-color:white;
                }
                span{
                    margin-top:10px;
                    text-align: center;
                    color: white;
                    font-size:12px;
                }
                
            }
        }
            
        
        `}</style>
    </div>
}