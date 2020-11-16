// @ts-nocheck
import '../style.less';
import App, {Container} from 'next/app'
import React, {useState} from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import LeftBody from "../components/LeftBody";
import RightBody from "../components/RightBody";

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            loadStart: true
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
