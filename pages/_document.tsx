import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from "react";


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <script type="text/javascript" dangerouslySetInnerHTML={{__html:`var _hmt = _hmt || [];
                        (function() {
                        var hm = document.createElement("script");
                        hm.src = "https://hm.baidu.com/hm.js?266020f07fa1b6ba828cbbcc6eaaab6e";
                        var s = document.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(hm, s);
                    })();`}}>
                    </script>
                    {/*<script type="text/javascript" src="//bmjp.t4m.cn/applink.js"></script>*/}
                </Head>
                <body style={{backgroundColor: '#51087b'}}>
                <Main/>
                <NextScript/>
                <script id="-mob-share" src="http://f1.webshare.mob.com/code/mob-share.js?appkey=3184d49693dff"></script>
                </body>
            </Html>
        )
    }
}
