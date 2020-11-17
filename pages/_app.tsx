// @ts-nocheck
import '../style.less';
import App, {AppProps, Container} from 'next/app'
import React, {useState} from 'react';
import LeftBody from "../components/LeftBody";
import RightBody from "../components/RightBody";
import Router from "next/router";


export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            loadStart: true
        }
    }

    componentDidMount() {
        Router.onRouteChangeStart =  (props) => {
            this.setState({loadStart:true})
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
