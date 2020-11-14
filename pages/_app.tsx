
import App, {Container} from 'next/app'
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return  <ParallaxProvider><Component {...pageProps} /></ParallaxProvider>
    }
}
