import styles from './style.module.less';
import {useEffect, useRef, useState} from "react";
import anime from 'animejs';
// @ts-ignore
import Head from 'next/Head';
const Page1 =  () => {
    const ref = useRef();
    const subref = useRef();
    function start(e) {
        // @ts-ignore
        ref.current.play()
    }
    const [fixedV, setFixedV] = useState(0);
    useEffect(()=>{
        ref.current = anime.timeline({
            endDelay: 1000,
            easing: 'easeInOutQuad',
            autoplay: true,
        }).add({
            targets: '.animation-img1',
            scale:[3, 1],
            duration: 1000
        }).add({
            targets: '.animation-begin',
            bottom:[-50, 160],
            duration: 200
        }).add({
            targets: '.animation-container',
            translateY: '-100vh',
            duration: 1000,
        }).add({
            targets: '.animation-container',
            translateY: '-200vh',
            duration: 1000,
        }).add({
            targets: '.animation-container',
            translateY: '-300vh',
            duration: 1000,
        }).add({
            targets: '.animation-container',
            translateY: '-400vh',
            duration: 1000,
        }).add({
            targets: '.animation-container',
            translateY: '-500vh',
            duration: 1000,
        }).add({
            targets: '.animation-container',
            translateY: '-600vh',
            duration: 1000,
        })


        addQIaoduan()


    },[])

    function showBtn(v = 0) {
        setFixedV(v)
        // @ts-ignore
        document.querySelector('.animation-fixed').style.display = v > 0?"flex":'block';
        // @ts-ignore
        ref.current.pause();
        if(subref.current){
            // @ts-ignore
            subref.current.play();
        } else {
            subref.current = anime({
                targets: '.animation-fixed',
                bottom: 0,
                duration: 1000,
                height: "100vh",
                translateY: 0,
            })
        }


    }
    function addQIaoduan() {
        // @ts-ignore
        ref.current.children[1].finished.then((data)=>{
            // @ts-ignore
            ref.current.pause()
        });
    }

    // @ts-ignore
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
            <script type="text/javascript"
                    dangerouslySetInnerHTML={{__html:` /* 这里我们利用了一个自执行函数 */
(function(){  
    change();  
    function change(){     
         /* 这里的html字体大小利用了一个简单书序公式（十字相乘），当我们默认设置以屏幕320px位基准此时的字体大小为20px(320    20px),那么浏览器窗口大小改变的时候新的html的fontSize（clientWidth  新的值）就是clientWidth*20/320 */
         document.documentElement.style.fontSize = document.documentElement.clientWidth*20/320 + 'px';  
    }    
 /* 监听窗口大小发生改变时 */
  window.addEventListener('resize',change,false);})();`}}
            />
        </Head>
        <audio autoPlay={true} src="/page1/song.mp3" />
        <div className={styles.container} >
            <div className={'animation-container'}>
                <div className={`${styles.img1} animation-img1`}>
                    <img src={'/page1/1.png'} />
                    <div className={`${styles.title} animation-img1-div`}/>
                    <button className={`${styles.btn} animation-begin`}
                            onClick={start}
                    ></button>
                </div>

                <div className={`${styles.img2} animation-img2`}>
                    <button className={styles.home_special}
                            onClick={()=>showBtn(1)}
                    >
                    </button>
                    <img className={styles.img2_sut} src={'/page1/2.png'} />
                </div>
                <div className={`${styles.img2} animation-img3`}>
                    <button className={styles.home_special}
                            onClick={()=>showBtn(1)}
                    >
                    </button>
                    <img className={styles.img2_sut} src={'/page1/3.png'} />
                </div>
                <div className={`${styles.img2} animation-img4`}>
                    <button className={styles.home_special}
                            onClick={()=>showBtn(1)}
                    >
                    </button>
                    <img className={styles.img2_sut} src={'/page1/4.png'} />
                </div>
                <div className={`${styles.img2} animation-img5`}>
                    <button
                        className={styles.home}
                        onClick={()=>showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/5.png'} />
                </div>
                <div className={`${styles.img2} animation-img6`}>
                    <button className={styles.home}
                            onClick={()=>showBtn(0)}
                    >
                    </button>
                    <img  src={'/page1/6.png'} />
                </div>
                <div className={`${styles.img2} animation-img65`}>
                    <button className={styles.home}
                            onClick={()=>showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/6-5.png'} />
                </div>
            </div>
            <div className={`${styles.fixed}  animation-fixed ${fixedV >0?styles.fixed_1:''}`}>
                <button
                    className={`${styles.fixed_btn} ${fixedV >0 ? styles.fixed_special_1:""}`}
                    onClick={()=>{
                        // @ts-ignore
                        document.querySelector('.animation-fixed').style.display = 'none';
                        // @ts-ignore
                        ref.current.restart()
                        addQIaoduan()
                    }}
                ><img className={styles.btn_o} src={'/page1/restart.png'} /></button>
                <button
                    style={{
                        marginTop: '0.64rem'
                    }}
                    className={`${styles.fixed_btn} ${fixedV >0 ? styles.fixed_special:""}`}
                    onClick={()=>{

                    // @ts-ignore
                    document.querySelector('.animation-fixed').style.display = 'none';
                    // @ts-ignore
                    ref.current.play()
                    addQIaoduan()
                }}
                ><img className={styles.btn_o} src={'/page1/continue.png'} /></button>
            </div>
        </div>

    </>);
}
Page1.getInitialProps = async (ctx) => {

    return { };
};

export  default  Page1;
