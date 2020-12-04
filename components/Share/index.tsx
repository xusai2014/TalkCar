import styles from './styles.module.less'

export default ({description, pic, title}) => {

    function share (e) {
        debugger
        // @ts-ignore
        window.mobShare.config( {

            appkey: '3184d49693dff', // appkey

            params: {
                url: window.location.href, // 分享链接
                title, // 分享标题
                description,
                pic,

            }

        } );
        const { id } = e.target;
        // @ts-ignore
        const btn = window.mobShare( id );
        btn.send();
    }


    // @ts-ignore
    return <div onClick={share} className={styles.bg}>
        <span className={styles.post}>
            转发
        </span>
        <span >
            <i id={'weibo'} className={styles.iconfont}>&#xe676;</i>
        </span>
        <span >
            <i id={'weixin'} className={styles.iconfont}>&#xe6b8;</i>
        </span>
    </div>
}
