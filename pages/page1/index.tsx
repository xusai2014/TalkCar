// @ts-nocheck
import styles from './style.module.less';
import {useEffect, useRef, useState} from "react";
import anime from 'animejs';
// @ts-ignore
import Head from "next/head";
import {typing} from "../../lib/typing";

const Page1 = () => {
    const ref = useRef();
    const subref = useRef();

    const [messageVal, setMessage] = useState('');
    const [phoneShow, setPhoneshow] = useState(false);
    const [closeList, setCloseList] = useState(true);
    const [call, setCall] = useState(0);
    const [dialogIndex,setDialogIndex] = useState(0)
    // @ts-ignore
    const [extraList, setExtraList] = useState([])

    function start(e) {
        // @ts-ignore
        ref.current.play()
    }

    const [fixedV, setFixedV] = useState(0);
    const txtList1 = [
        '大学毕业后',
        '我搬进了一所只有几平方米的小公寓',
        '开始了独居的生活',
        '自己挑选家具',
        '调整起居',
        '努力工作',
        '学着习惯一个人'
    ]
    useEffect(() => {
        ref.current = anime.timeline({
            easing: 'easeInOutExpo',
            autoplay: true,
        })
            .add({
                targets: '.animation-img1',
                scale: [3, 1],
                duration: 1000
            })
            .add({
                targets: '.animation-begin',
                bottom: [-50, 160],
                duration: 300
            })
            .add({targets: '.animation-container', translateY: '-100vh', duration: 3000,
                changeComplete: async ()=>{

                    const list = document.getElementById('txt1');
                    typing(list.children[1], list.children[0],()=>{
                        ref.current.play()
                    })

                }
            })
            .add({
                targets: '.animation-container',
                translateY: '-200vh',
                duration: 3000,

            })
            .add({
                targets: '.animation-container',
                translateY: '-300vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-400vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-500vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-600vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-700vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-800vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-900vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1000vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1100vh',
                duration: 3000,
                changeComplete: async ()=>{
                    const list = document.getElementById('txt2');
                    typing(list.children[1], list.children[0],()=>{
                        ref.current.play()
                    })
                }
            })
            .add({
                targets: '.animation-container',
                translateY: '-1200vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1300vh',
                duration: 3000,

            })
            .add({
                targets: '.animation-container',
                translateY: '-1400vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1500vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1600vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1700vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1800vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-1900vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2000vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2100vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2200vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2300vh',
                duration: 3000,
                changeComplete: async ()=>{
                    const list = document.getElementById('txt3');
                    typing(list.children[1], list.children[0],()=>{
                        ref.current.play()
                    })
                }
            })
            .add({
                targets: '.animation-container',
                translateY: '-2400vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2500vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2600vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2700vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-2800vh',
                duration: 3000
            })
            .add({
                targets: '.animation-container',
                translateY: '-2900vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-3000vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-3100vh',
                duration: 3000,
                changeComplete: async ()=>{
                    const list = document.getElementById('txt11');
                    typing(list.children[1], list.children[0],()=>{
                        ref.current.play()
                    })

                }
            })
            .add({
                targets: '.animation-container',
                translateY: '-3200vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-3300vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-3400vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-3500vh',
                duration: 3000,
            })
            .add({
                targets: '.animation-container',
                translateY: '-3500vh',
                duration: 3000,
                changeComplete: async ()=>{
                    const list = document.getElementById('txt12');
                    typing(list.children[1], list.children[0],()=>{})
                }
            })


        addQIaoduan()


    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (extraList.length > 0) {
                setCloseList(true)
            }
        }, 200)
    }, [extraList])

    function showBtn(v = 0) {
        setFixedV(v)
        // @ts-ignore
        document.querySelector('.animation-fixed').style.display = v > 0 ? "flex" : 'block';
        // @ts-ignore
        ref.current.pause();
        if (subref.current) {
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
        ref.current.children[1].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[2].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[5].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[6].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });

        // @ts-ignore
        ref.current.children[10].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[11].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[12].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[13].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });


        // @ts-ignore
        ref.current.children[16].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });

        // @ts-ignore
        ref.current.children[18].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });

        // @ts-ignore
        ref.current.children[20].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[21].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[23].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });


        // @ts-ignore
        ref.current.children[25].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });

        // @ts-ignore
        ref.current.children[31].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
        // @ts-ignore
        ref.current.children[36].finished.then((data) => {
            // @ts-ignore
            ref.current.pause()
        });
    }

    // @ts-ignore
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui"/>
            <script type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: ` /* 这里我们利用了一个自执行函数 */
(function(){  
    change();  
    function change(){     
         /* 这里的html字体大小利用了一个简单书序公式（十字相乘），当我们默认设置以屏幕320px位基准此时的字体大小为20px(320    20px),那么浏览器窗口大小改变的时候新的html的fontSize（clientWidth  新的值）就是clientWidth*20/320 */
         document.documentElement.style.fontSize = document.documentElement.clientWidth*20/320 + 'px';  
    }    
 /* 监听窗口大小发生改变时 */
  window.addEventListener('resize',change,false);})();`
                    }}
            />
        </Head>
        <audio autoPlay={true} src="/page1/song.mp3"/>
        <div className={styles.container}>
            <div className={'animation-container'}>
                <div className={`${styles.img1} animation-img1`}>
                    <img src={'/page1/1.png'}/>
                    <div className={`${styles.title} animation-img1-div`}/>
                    <button className={`${styles.btn} animation-begin`}
                            onClick={start}
                    ></button>
                </div>
                <div id={'txt1'} className={`${styles.txt} animation-img1-1`}>
                    <div className={styles.txt_one} style={{width: '100vw', textAlign: 'right'}}>
                    </div>
                    <div className={styles.txt_con} style={{display: 'none'}}>
                        {txtList1.map((v)=> <>{v}<br/></>)}
                    </div>
                </div>

                <div className={`${styles.img2} animation-img2`}>
                    <button className={styles.home_special}
                            onClick={() => showBtn(1)}
                    >
                    </button>
                    <img className={styles.img2_sut} src={'/page1/2.png'}/>
                </div>
                <div className={`${styles.img2} animation-img3`}>
                    <button className={styles.home_special}
                            onClick={() => showBtn(1)}
                    >
                    </button>
                    <img className={styles.img2_sut} src={'/page1/3.png'}/>
                </div>
                <div className={`${styles.img2} animation-img4`}>
                    <button className={styles.home_special}
                            onClick={() => showBtn(1)}
                    >
                    </button>
                    <img className={styles.img2_sut} src={'/page1/4.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img5`}>
                    <button
                        className={styles.home}
                        onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/5.png'}/>
                    <button onClick={start} className={styles.next}></button>
                </div>
                <div className={`${styles.img2} animation-img6`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/6.png'}/>
                </div>
                <div className={`${styles.txt} animation-img7`}>
                    <button className={styles.home_black}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <div className={styles.img_list}>
                        {
                            [
                                [
                                    '/page1/pintu/6-1.png',
                                    '/page1/pintu/6-2.png',
                                    '/page1/pintu/6-3.png',
                                    '/page1/pintu/6-4.png',
                                ],
                                [
                                    '/page1/pintu/6-5.png',
                                    '/page1/pintu/6-6.png',
                                    '/page1/pintu/6-7.png',
                                    '/page1/pintu/6-8.png',
                                ],
                                [
                                    '/page1/pintu/6-9.png',
                                    '/page1/pintu/6-10.png',
                                    '/page1/pintu/6-11.png',
                                    '/page1/pintu/6-12.png',
                                ],
                            ].map((item, k) => {
                                return <div className={styles.img_list_q}>
                                    {
                                        item.map((url, k) => {
                                            return <img
                                                style={{
                                                    margin: k === 0 ? '0 0.1rem 0.1rem 0' :
                                                        (k === 1 ? '0 0 0.1rem 0.1rem' :
                                                                k === 2 ? '0.1rem 0.1rem 0 0' : '0.1rem 0 0 0.1rem'
                                                        )
                                                }}
                                                src={url}/>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={`${styles.img2} animation-img65`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/6-5.png'}/>
                </div>
                <div className={`${styles.img2} animation-img8`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/7.png'}/>
                    <div className={styles.phone_con}>
                        <span onClick={(e) => {
                            setPhoneshow(true)
                            setCloseList(false)
                            e.preventDefault();
                            e.stopPropagation();
                        }}/>
                        <button>发送</button>
                    </div>
                    <div style={{
                        ...phoneShow ? {
                            height: '100vh',
                            opacity: 1,
                        } : {
                            height: '0',
                            opacity: 0
                        }
                    }} className={styles.fixed_phone} onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}>
                        <div className={styles.phone_item}>
                            <div className={styles.header}>
                                <img src={'/page1/right.png'} onClick={() => {
                                    setPhoneshow(false);
                                    setMessage('')
                                    setExtraList([])
                                }}/>
                                <span>妈妈</span>
                                <img src={'/page1/home.png'}/>
                            </div>
                            <div className={styles.phone_body}>
                                {
                                    [{
                                        type: 'mother',
                                        message: '工作忙不忙？房子看的怎么样了？ 注意休息。'
                                    },
                                        ...messageVal ? [{
                                            type: 'my',
                                            message: messageVal
                                        }] : [],
                                        ...extraList,
                                    ].map(({type, message}) => {

                                        return <div className={styles.message}
                                                    style={{...type === 'my' ? {justifyContent: 'flex-end'} : {}}}>
                                            {
                                                type === 'mother' ?
                                                    <>
                                                        <img src={`/page1/${type}.png`}
                                                             style={{marginRight: '0.52rem'}}/>
                                                        <span>
                                                        {message}
                                                    </span>
                                                    </> :
                                                    <>
                                                        <span style={{
                                                            marginLeft: '1.5rem',
                                                            textAlign: 'left'
                                                        }}>{message}</span>
                                                        <img style={{marginLeft: '0.52rem'}}
                                                             src={`/page1/${type}.png`}/>
                                                    </>

                                            }
                                        </div>

                                    })
                                }
                            </div>
                            {
                                closeList?null:
                                    <div className={styles.fixed_list} >{
                                        [
                                            '真的很糟糕 😂',
                                            '知道了，我忙了',
                                            '挺好的，不用担心。'
                                        ].map((value, key) => {
                                            return <div onClick={() => {
                                                setMessage(value)
                                                if (key === 0) {
                                                    setTimeout(() => {
                                                        // @ts-ignore

                                                        setExtraList([
                                                            // @ts-ignore
                                                            {type: 'mother', message: '那我就放心了。'},
                                                            // @ts-ignore
                                                            {type: 'my', message: '😀'},
                                                        ])
                                                    }, 500)

                                                } else if (key === 1) {
                                                    setTimeout(() => {
                                                        // @ts-ignore
                                                        setExtraList([
                                                            // @ts-ignore
                                                            {type: 'mother', message: '哪里遇见难处了，跟妈妈说一说。'},
                                                            // @ts-ignore
                                                            {type: 'my', message: '唉，在这说不清楚，有空视频说'},
                                                            // @ts-ignore
                                                            {type: 'mother', message: '好的，有妈妈在，别担心'},
                                                        ])
                                                    }, 500)

                                                } else if (key === 2) {
                                                    setTimeout(() => {
                                                        // @ts-ignore
                                                        setExtraList([{type: 'mother', message: '好的吧......'},])
                                                    }, 500)

                                                }
                                            }}>{value}</div>
                                        })
                                    }</div>
                            }
                            {
                                closeList ? <button onClick={start} className={styles.next_phone}></button> : null
                            }

                        </div>
                    </div>
                </div>
                <div className={`${styles.img2} animation-img9`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/7-1.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div id={'txt2'} className={`${styles.txt} animation-img1-1`}>
                    <div className={styles.txt_one} style={{width: '100vw', textAlign: 'right'}}>
                    </div>
                    <div className={styles.txt_con} style={{display: 'none'}}>
                        成长的过程就是一直在学习<br />一直在丢弃<br/>
                        从学生使得带进入社会
                        <br/>身边的每一件事都教会我们
                        <br/>适应环境生存下来的本领
                        <br/>我们被赋予的技能
                    </div>
                </div>
                <div className={`${styles.img2} animation-img10`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8-1.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img11`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8-2.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.txt} animation-img12`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}} src={'/page1/zhong20.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img13`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/9.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.txt} animation-img14`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}} src={'/page1/zhong40.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8-3-1.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8-3-2.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.txt} animation-img16`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}}
                         src={'/page1/zhong8.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img17`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8-4.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.txt} animation-img18`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}}
                         src={'/page1/zhong830.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img19`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8-5.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div id={'txt3'} className={`${styles.txt} animation-img1-1`}>
                    <div className={styles.txt_one} style={{width: '100vw', textAlign: 'right'}}>
                    </div>
                    <div className={styles.txt_con} style={{display: 'none'}}>
                        有时候 <br />
                        我们并不会理解父母的唠叨<br />
                        甚至有些不耐烦 <br />
                        但是父母的唠叨有时未必是一种错误<br />
                        要感悟深处的爱
                    </div>
                </div>
                <div className={`${styles.txt}`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}}
                         src={'/page1/zhong530.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2}`} style={{backgroundColor: '#fdd2a7',
                    ...call ===1?{
                        backgroundImage: 'url(/page1/8-6.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }:(
                        call ===3?{
                            backgroundImage: 'url(/page1/rg.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }:{}
                    )
                }}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>

                    {
                        call === 3? null: <img style={{
                            width: '80vw',
                            display: 'block',
                            height: 'auto'
                        }} src={call === 2? '/page1/shutdown1.png':'/page1/phone.png'}
                        />
                    }
                    {
                        call === 0?<div className={styles.phonels}>
                            <img className={styles.touxiang} src={'page1/mother.png'} />
                            <div className={styles.txtK}>
                                妈妈
                            </div>
                            <div className={styles.caozuo}>
                                <img src={'page1/closeP.png'}  onClick={()=>{
                                    setCall(2)
                                    setTimeout(()=>{
                                        setCall(0)
                                    },2000)
                                }}/>
                                <img src={'page1/jieP.png'} onClick={()=>{
                                    setCall(1)
                                    setTimeout(()=>{
                                        setCall(3)
                                    },2000)
                                }}/>
                            </div>
                        </div>:(
                            call === 2?null:
                                (
                                    call === 1? <div className={styles.phonels}>
                                        <img className={styles.touxiang} src={'page1/mother.png'} />
                                        <div className={styles.txtK}>
                                            妈妈
                                        </div>
                                        <div className={styles.clock}>
                                            <img src={'page1/00.png'} />
                                        </div>
                                        <div className={styles.caozuo1}>
                                            <img src={'page1/35.png'} />
                                            <img src={'page1/36.png'} />
                                            <img src={'page1/37.png'} />
                                        </div>
                                        <div className={styles.ysq}>
                                            <img src={'page1/38.png'} />
                                        </div>
                                    </div>:null
                                )

                        )
                    }
                    {
                        call === 3?
                            <div className={styles.dialog22}>
                                <img src={'/page1/98.png'} />
                                <div onClick={()=>{
                                    if(dialogIndex >= 3) {
                                        ref.current.play()
                                    } else {
                                        setDialogIndex(dialogIndex + 1)
                                    }
                                }}>
                                    {
                                        [
                                            ['不用你帮忙','我很好'],
                                            ['先不找男朋友','我知道了'],

                                            ['就没什么，工作呢','知道了'],
                                            ['就这样，我现在很忙','是的，我知道了'],
                                        ][dialogIndex].map(v=> <span>{v}</span>)
                                    }
                                </div>
                            </div>:
                            null
                    }
                </div>
                <div className={`${styles.txt} animation-img18`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}}
                         src={'/page1/2230.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>

                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/tttx.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>

                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/bbooooff.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>


                <div className={`${styles.txt} animation-img18`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img className={styles.zhong} style={{width: '8.53rem'}}
                         src={'/page1/2300.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>

                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/8.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>

                <div id={'txt11'} className={`${styles.txt} animation-img1-1`}>
                    <div className={styles.txt_one} style={{width: '100vw', textAlign: 'right'}}>
                    </div>
                    <div className={styles.txt_con} style={{display: 'none'}}>
                        周末
                        <br/>无论是一个人
                        <br/>两个人
                        <br/>三个人
                        <br/>或者是一群人
                        <br/>我们总能在不同的阶段拥有不同的收获
                        <br/>当我们独自前行的是好
                        <br/>要珍惜陪伴的日子
                    </div>
                </div>
                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/uuuttt.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/iioolllhh.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/djk.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div className={`${styles.img2} animation-img15`}>
                    <button className={styles.home}
                            onClick={() => showBtn(0)}
                    >
                    </button>
                    <img src={'/page1/kllloo.png'}/>
                    <button onClick={start} className={styles.next_special}></button>
                </div>
                <div id={'txt12'} className={`${styles.txt} animation-img1-1`}>
                    <div className={styles.txt_one} style={{width: '100vw', textAlign: 'right'}}>
                    </div>
                    <div className={styles.txt_con} style={{display: 'none'}}>
                        独居在每个来到大城市打拼的年轻人
                        <br/>刻下了深深的烙印
                        <br/>在坚持的道路上
                        <br/>也许是孤独的
                        <br/>这些所谓的“孤独感”
                        <br/>也许将会是成就我们未来
                    </div>
                </div>

            </div>
            <div className={`${styles.fixed}  animation-fixed ${fixedV > 0 ? styles.fixed_1 : ''}`}>
                <button
                    className={`${styles.fixed_btn} ${fixedV > 0 ? styles.fixed_special_1 : ""}`}
                    onClick={() => {

                        // @ts-ignore
                        document.querySelector('.animation-fixed').style.display = 'none';
                        // @ts-ignore
                        ref.current.play()
                        addQIaoduan()
                    }}
                >
                    <div>继续故事</div>
                </button>
                <button
                    style={{
                        marginTop: '0.64rem'
                    }}
                    className={`${styles.fixed_btn} ${fixedV > 0 ? styles.fixed_special : ""}`}

                    onClick={() => {
                        // @ts-ignore
                        document.querySelector('.animation-fixed').style.display = 'none';
                        // @ts-ignore
                        ref.current.restart()
                        addQIaoduan()
                    }}


                >
                    <div>
                        {fixedV > 0 ? "返回主页" : "重新开始"}
                    </div>
                </button>
            </div>
        </div>

    </>);
}
Page1.getInitialProps = async (ctx) => {

    return {};
};

export default Page1;
