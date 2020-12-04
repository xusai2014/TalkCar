import Post from '../../components/Post';
import axios from "axios";
import {Server_baseUrl} from "../../config/autoconfig";
import React, {useEffect, useState} from "react";
import styles from './style.module.less';
export default ({data}) => {
    // @ts-ignore
    return <div className={styles.container} ><Post {...data} single={true} /></div>
}
export async function getServerSideProps(context) {
    const { query } = context;
    const { id ='' } = query;

    try {
        const data  = await axios.get(`${Server_baseUrl}/api/article/item?id=${id}`, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        console.log(data.data,'>>>>>>>data')
        return {
            props: {
                data: data.data.data
            }, // will be passed to the page component as props
        }

    } catch (e) {
        return {
            props: {}, // will be passed to the page component as props
        }
    }



}
