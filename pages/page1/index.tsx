import styles from './style.module.less';
import {useEffect, useRef, useState} from "react";
import anime from 'animejs';

const page1 = () => {
    const ref = useRef();
    const subref = useRef();
    function start(e) {
        // @ts-ignore
        ref.current.play()
    }
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
            duration: 500
        }).add({
            targets: '.animation-img1',
            height: 0,
            duration: 500,
        }).add({
            targets: '.animation-img2',
            translateX: -100,
            duration: 1000
        })

        addQIaoduan()


    },[])

    function showBtn() {
        // @ts-ignore
        document.querySelector('.animation-fixed').style.display = 'flex';
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

    return <div className={styles.container} >
        <button className={styles.home} onClick={showBtn}>
            home
        </button>
        <div className={`${styles.img1} animation-img1`}>
            <img src={'/page1/1.png'} />
            <button className={`${styles.btn} animation-begin`}
                    onClick={start}
            >开始故事</button>
        </div>

        <div className={`${styles.img2} animation-img2`}>
            <img src={'/page1/2.png'} />
        </div>
        <div className={`${styles.fixed} animation-fixed`}>
            <button onClick={()=>{
                // @ts-ignore
                document.querySelector('.animation-fixed').style.display = 'none';
                // @ts-ignore
                ref.current.restart()
                addQIaoduan()
            }}
            >重新开始</button>
            <button onClick={()=>{
                // @ts-ignore
                document.querySelector('.animation-fixed').style.display = 'none';
                // @ts-ignore
                ref.current.play()
                addQIaoduan()
            }}
            >继续浏览</button>
        </div>
    </div>
}
export default  page1;
