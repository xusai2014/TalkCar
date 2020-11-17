//@ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Post from '../Post/index';
import axios from 'axios';
import _ from 'lodash';
import styles from './index.module.less';


export default ({loadStart, setLoadStart, matchParam = {o_name:""}}) => {

    const [list, setList] = useState([]);

    function getMore() {
        return axios.get(`http://101.201.153.75/api/article/list/page?page=${list.length / 20 + 1}&o_name=${matchParam.o_name}`, {
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
        if (loadStart) {
            getMore().finally(() => {
                setLoadStart(false);
            });
        }

    }, [loadStart])
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

        <div className={`${styles.loadContainer} ${!loadStart ? styles.loadFinish : ''}`}>
            <img src={'/loading.gif'}
                 className={styles.loading}
            />
        </div>
        {

            list.map((v) => {
                return <Post {...v}></Post>
            })
        }
        {
            list.length !== 0 ? <div className={styles.more} onClick={() => {
                getMore()
            }}>加载更多</div> : null
        }
    </div>
}