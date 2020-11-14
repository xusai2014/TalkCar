import React from "react";
import AVATAR_LIST from '../config/CONSTANTS';
export default ({
                    o_name= '车王',
                    o_ctime= '2020-10-28 18:00',
                    t_desc= '9月，两款备受瞩目的新款车型——奔驰E级(参数|询价)和宝马5系，在万众期待的2020北京车展上接连上市。强强相遇，注定掀起一场波澜。新款国产奔驰E级共推出12款车型，售价区间为43.08-64.28万元；新款宝马5系推出17款车型，售价区间为42.69-60.39万元。',
                    t_img,
                    t_title,
                    o_url,
}) =>{

    return <div style={{
        display: 'flex',
        borderLeft: '1px solid rgba(128, 128, 128, 0.23)',
        borderRight: '1px solid rgba(128, 128, 128, 0.23)',
        borderBottom: '1px solid rgba(128, 128, 128, 0.23)'}}
        className={'container'}
    >


        <img src={AVATAR_LIST[o_name]?AVATAR_LIST[o_name]:'/auto-sales-cube.png'} className={'avatar'} />
        <div className={'content'} >
            <div style={{margin: '0 0 5px 0'}}>
                <div className={'name'}>{o_name}</div>
                <div className={'title'}>{t_title}</div>
                <div className={'time'}>发布时间 {o_ctime}</div>
            </div>
            <div>
                <a href={o_url} target={'_blank'}>{
                    '\n'+ t_desc
                }</a>

            </div>
            <div className={'extraContent'}>
                <img src={t_img} className={'img'} />

            </div>
        </div>



        <style jsx>{`
            .container{
                padding: 10px 23px;
                width: fit-content;
                @media only screen
                and (max-device-width : 768px){
                  width: 100%;
                  padding: 10px 10px;
                }
            }
        
            .avatar{
            
                border: 1px solid yellow;
                border-radius: 30px;
                margin-left:10px;
                 width:60px;
                  height:60px;
                @media only screen
                and (max-device-width : 768px){
                  margin-left:0px;
                  border-radius: 5px;
                  width:50px;
                  height:50px;
                }
            }
            .extraContent{
                width: 44vw;
                margin: auto;
                min-height: 5vw;
                border: 1px solid gray;
                border-radius: 5px;
                background-color: #bfffab;
                margin-top:10px;
                align-items: center;
                display: flex;
                @media only screen
                and (max-device-width : 768px){
                  width: 75vw;
                }
                .img{
                    border-radius: 5px;
                    width: inherit;
                    outline: none;
                    padding: 0;
                    margin: 0;
                }
              
            }
            .content{
                margin: 0px 20px 0px 40px;
                width:  45vw;
                color: white;
                font-size:14px;
                line-height: 22px;
                font-weight: 200;
                @media only screen
                and (max-device-width : 768px){
                  width: 100%;
                  margin: 0px 10px;
                 
                }
            }
            .name{
                color: #43e413;
                font-size:20px;
            }
            .time{
                color: #f1acd1db;
                font-size:12px;
            }
            .title{
                font-size:16px;
                line-height:28px;
            }
         
        `}</style>
    </div>
}