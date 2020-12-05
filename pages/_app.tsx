// @ts-nocheck
import '../style.less';
import App, {AppProps, Container} from 'next/app'
import React, {useState} from 'react';
import LeftBody from "../components/LeftBody";
import RightBody from "../components/RightBody";
import Router from "next/router";
import axios from 'axios';
import { baseUrl } from '../config/autoconfig';
import { result } from 'lodash';


export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            loadStart: true
        }
    }

    init() {
        axios.get(`${baseUrl}/api/weixin/share?url=${window.location.href}`, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((result)=>{
            const { timestamp, nonceStr, signature } = result.data.data;

            window.wx.config({
                debug: process.env.NODE_ENV === 'development', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wx4268bca2f6420e29', // 必填，公众号的唯一标识
                timestamp, // 必填，生成签名的时间戳
                nonceStr, // 必填，生成签名的随机串
                signature,// 必填，签名
                jsApiList: ['updateAppMessageShareData',], // 必填，需要使用的JS接口列表
                openTagList: ['wx-open-launch-app']
            });

        })
    }

    componentDidMount() {
        this.init();
        Router.onRouteChangeStart =  (props) => {
            this.setState({loadStart:true});
            this.init();
        }
       

    }


    render() {
        const {Component, pageProps} = this.props;

        return <div>

            <LeftBody setLoadStart={(v) => this.setState({loadStart: v})}
                      loadStart={this.state.loadStart}
            >

            </LeftBody>
            <Component
                setLoadStart={(v) => this.setState({loadStart: v})}
                loadStart={this.state.loadStart}
                {...pageProps} />
            <RightBody
            ></RightBody>
        </div>
    }
}
