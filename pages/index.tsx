//@ts-nocheck
import Head from 'next/head';
import LeftBody from '../components/LeftBody';
import RightBody from '../components/RightBody';
import MainBody from '../components/MainBody/index';

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>车唧唧</title>
                <link rel="icon" href="/favicon.jpg"/>
            </Head>
            <div>
                <LeftBody></LeftBody>
                <MainBody></MainBody>
                <RightBody></RightBody>
            </div>


        </div>
    )
}
