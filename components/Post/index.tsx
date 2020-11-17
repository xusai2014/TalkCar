import React, {useState} from "react";
import AVATAR_LIST from '../../config/CONSTANTS';
// @ts-ignore
import styles from './index.module.less';
import Router from "next/router";

export default ({
                    o_name = '车王',
                    o_ctime = '2020-10-28 18:00',
                    t_desc = '9月，两款备受瞩目的新款车型——奔驰E级(参数|询价)和宝马5系，在万众期待的2020北京车展上接连上市。强强相遇，注定掀起一场波澜。新款国产奔驰E级共推出12款车型，售价区间为43.08-64.28万元；新款宝马5系推出17款车型，售价区间为42.69-60.39万元。',
                    t_img,
                    t_title,
                    o_url,
                    t_tags,
                }) => {

    const [ expand, setExpand] =useState(false);

    const getImgUrl = (o_name)=>{
        let url = '/auto-sales-cube.png';
        Object.keys(AVATAR_LIST).map((key)=>{
            if(AVATAR_LIST[key].name === o_name){
                url  =  AVATAR_LIST[key].url
            }
        })
        return url;

    }

    function getKey(o_name){
        let keyStr = ''
        Object.keys(AVATAR_LIST).map((key) => {
            if(AVATAR_LIST[key].name === o_name){
                keyStr = key;
            }
        })
        return keyStr
    }

    return <div className={styles.container}
        >
        <img src={getImgUrl(o_name)} className={styles.avatar}
             onClick={() => {
                 Router.push(`/Personal/${getKey(o_name)}`)
             }}
        />
        <div className={styles.content}>
            <div style={{margin: '0 0 5px 0'}}>
                <div className={styles.name}>{o_name}</div>
                <div className={styles.title}>{t_title}</div>

            </div>
            {
                t_desc?<div>
                    &nbsp;--&nbsp;{
                    expand?t_desc:
                        t_desc.length > 120 ?<>{t_desc.substr(0,120)+" ......"}</>:t_desc
                }
                </div>:null
            }

            <div className={styles.expand}>
                <span onClick={(e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    setExpand(!expand);
                }} className={styles.more}>{t_desc?(!expand?'查看更多':'收起'):''}</span>
                <span className={styles.time}>发布时间 {o_ctime}</span>
            </div>
            <div className={styles.tags}>
                {
                    t_tags.map((v)=>{
                        return v ? <a>{`#${v.trim()}`}</a> : null;
                    })
                }
            </div>
            <a href={o_url} className={styles.href} target={'_blank'}>{o_url.length>30?o_url.substr(0,30)+' ...':o_url}</a>
            <a href={o_url}  target={'_blank'}><div className={styles.extraContent}>

                <img src={t_img}/>
            </div></a>
        </div>
    </div>
}