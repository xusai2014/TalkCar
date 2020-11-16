import React, {useEffect} from "react";
import Head from "next/head";
import MainBody from "../../components/MainBody";
// @ts-ignore
import styles from './style.module.less';
import CONSTANTS from '../../config/CONSTANTS';
import { useRouter } from 'next/router'
export default ({setLoadStart,loadStart}) => {
    const router = useRouter()
    const { username ='' } = router.query;
    if(!username){
        return null;
    }
    // @ts-ignore
    let item:any = {};
    Object.keys(CONSTANTS).map(key=>{
        if(key === username){
            item = CONSTANTS[key]
        }
    })


    useEffect(()=>{
        setLoadStart(true)
    },[])

    return <>
        <Head>
            <title>车唧唧</title>
            <link rel="icon" href="/favicon.jpg"/>
            <meta name={'keywords'} content={'车唧唧,汽车社区,汽车界的小家雀儿,汽车快讯'}/>
            <meta name={'description'} content={'车唧唧口号是汽车社区新势力，欢迎大家来到这里一起唧唧歪歪，有态度、更年轻、有个性的汽车发声根据地'}/>
        </Head>
        <div className={styles.container}>

            <div><img src={item.url} /></div>
            <div className={styles.info}>
                {item.name}
                <br />
            </div>


        </div>
        <div className={styles.short}>简介：{item.description}</div>
        <MainBody
            matchParam={{
                o_name:item.name
            }}
            setLoadStart={setLoadStart} loadStart={loadStart}></MainBody>
    </>
}