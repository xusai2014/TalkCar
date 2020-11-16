//@ts-nocheck
import Head from 'next/head';
import LeftBody from '../components/LeftBody/index';
import RightBody from '../components/RightBody';
import MainBody from '../components/MainBody/index';
import {useRef, useState} from "react";

export default function Home() {
    const [loadStart, setLoadStart] = useState(true)
    return (
        <div className="container">
            <Head>
                <title>车唧唧</title>
                <link rel="icon" href="/favicon.jpg"/>
            </Head>
            <div>
                <LeftBody setLoadStart={setLoadStart} loadStart={loadStart}></LeftBody>
                <MainBody setLoadStart={setLoadStart} loadStart={loadStart}></MainBody>
                <RightBody></RightBody>
            </div>


        </div>
    )
}
