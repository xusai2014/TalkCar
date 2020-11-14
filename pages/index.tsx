import Head from 'next/head';
import LeftBody from '../components/LeftBody';
import RightBody from '../components/RightBody';
import MainBody from '../components/MainBody';
export default function Home() {

    return (
        <div className="container">
        <Head>
        <title>车唧唧</title>
        <link rel="icon" href="/favicon.jpg" />
        </Head>
            <div>
                <LeftBody></LeftBody>
                <MainBody></MainBody>
                <RightBody></RightBody>
            </div>

        <style jsx>{``}</style>

    <style jsx global>{`
        html,
        body,
        #root {
          height: 100%;
          box-sizing: content-box;
          overflow: auto;
          font-family: PingFangSC-Medium,PingFang SC,sans-serif;
        }
       
          ::-webkit-scrollbar {
            width: 0;
            height: 8px;
          }

    
          ::-webkit-scrollbar-track {
            border-radius: 0;
          }

        div,
        p,
        span,
        h1,
        a,
        ul,
        li {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        ul > li {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        a {
          cursor: pointer;
          text-decoration: none;
          color: #fff;
        }
        abbr,
        address,
        article,
        aside,
        audio,
        b,
        blockquote,
        body,
        canvas,
        caption,
        cite,
        code,
        dd,
        del,
        details,
        dfn,
        div,
        dl,
        dt,
        em,
        fieldset,
        figcaption,
        figure,
        footer,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        header,
        hgroup,
        html,
        i,
        iframe,
        img,
        ins,
        kbd,
        label,
        legend,
        li,
        mark,
        menu,
        nav,
        object,
        ol,
        p,
        pre,
        q,
        samp,
        section,
        small,
        span,
        strong,
        sub,
        summary,
        sup,
        table,
        tbody,
        td,
        tfoot,
        th,
        thead,
        time,
        tr,
        ul,
        var,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          font-size: 100%;
          vertical-align: baseline;
          background: transparent;
          box-sizing: border-box;
        }
        body {
          line-height: 1;
          overflow-x: hidden;
          background: #51087b;
        }

        :focus {
          outline: 1;
        }
        article,
        aside,
        canvas,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section,
        summary {
          display: block;
        }

        nav ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }
        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
          content: '';
          content: none;
        }

        a {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
          background: transparent;
        }
      `}</style>
    </div>
)
}
