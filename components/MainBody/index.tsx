//@ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Publish from "../Publish";
import Post from '../Post';
import axios from 'axios';
import AVATAR_LIST from "../../config/CONSTANTS";
import LoadingData from '../LoadingData';
import _ from 'lodash';
import styles from './index.module.less';

export default () => {

    const version = 1;
    const [list, setList] = useState([]);

    function getMore() {
        axios.get(`http://101.201.153.75/api/article/list/page?page=${list.length / 20 + 1}`, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((result) => {
            if (result.data) {
                const {articleList, page} = result.data.data;
                if (list.length / 20 < page) {
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

    function getScrollHeight() {
        return (Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    }

    useEffect(() => {
        getMore();
    }, [])
    const debouncedSave = _.debounce(() => {
        if (getScrollTop() + getClientHeight() >= getScrollHeight()) {
            getMore();
        }
    }, 500)
    useEffect(function () {
        document.body.addEventListener('scroll', debouncedSave);
        return () => {
            document.body.removeEventListener('scroll', debouncedSave);
        }
    }, [list])

    return <div className={styles.container}>
        <div style={{
            width: '100%',
            borderBottom: '1px solid #8080803b',
        }}>
            {
                version === 1 ?
                    <div className={styles.list}>
                        <span className={styles.text}>热门频道</span>
                        {
                            Object.keys(AVATAR_LIST).map((key) => {
                                return (<div className={styles.item}>
                                    <img src={AVATAR_LIST[key]} className={styles.img} width={60} height={60}/>
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
            list.length !== 0 ?
                list.map((v) => {
                    return <Post {...v}></Post>
                }) : <LoadingData></LoadingData>
        }
        <div>
        </div>
    </div>
}