import React from "react";
import AVATAR_LIST from '../../config/CONSTANTS';
// @ts-ignore
import styles from './index.module.less';

export default ({
                    o_name = '车王',
                    o_ctime = '2020-10-28 18:00',
                    t_desc = '9月，两款备受瞩目的新款车型——奔驰E级(参数|询价)和宝马5系，在万众期待的2020北京车展上接连上市。强强相遇，注定掀起一场波澜。新款国产奔驰E级共推出12款车型，售价区间为43.08-64.28万元；新款宝马5系推出17款车型，售价区间为42.69-60.39万元。',
                    t_img,
                    t_title,
                    o_url,
                    t_tags,
                }) => {

    return <div style={{
                    display: 'flex',
                    borderLeft: '1px solid rgba(128, 128, 128, 0.23)',
                    borderRight: '1px solid rgba(128, 128, 128, 0.23)',
                    borderBottom: '1px solid rgba(128, 128, 128, 0.23)'
                }}
                className={styles.container}
        >
        <img src={AVATAR_LIST[o_name] ? AVATAR_LIST[o_name] : '/auto-sales-cube.png'} className={styles.avatar}/>
        <div className={styles.content}>
            <div style={{margin: '0 0 5px 0'}}>
                <div className={styles.name}>{o_name}</div>
                <div className={styles.title}>{t_title}</div>
                <div className={styles.time}>发布时间 {o_ctime}</div>
            </div>
            <div>
                <a href={o_url} target={'_blank'}>{
                    '\n' + t_desc
                }</a>
            </div>
            <div className={styles.tags}>
                {
                    t_tags.map((v)=>{
                        return v ? <a>{`#${v.trim()}`}</a> : null;
                    })
                }
            </div>
            <div className={styles.extraContent}>
                <img src={t_img}/>
            </div>
        </div>
    </div>
}