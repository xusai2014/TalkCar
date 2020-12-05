import styles from './styles.module.less'

export default ({description, pic, title, link}) => {

    function share (e) {
        debugger
        // @ts-ignore
        window.mobShare.config( {

            appkey: '3184d49693dff', // appkey

            params: {
                url: `${window.location.origin}${link}`, // 分享链接
                title, // 分享标题
                description,
                pic,

            }

        } );
        const { id }  = e.target;
        // @ts-ignore
        const btn = window.mobShare( id );
        btn.send();
    }

    function weixinShare() {
        debugger;
        global.wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            global.wx.updateAppMessageShareData({ 
              title, // 分享标题
              desc: description, // 分享描述
              link: `${window.location.origin}${link}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: pic, // 分享图标
              success: function () {
                // 设置成功
              }
            })
          });
    }


    // @ts-ignore
    return <div  className={styles.bg}>
        <span className={styles.span}>
            <i id={'weibo'} onClick={share} className={styles.iconfont}>&#xe676;</i>
            微博转发
        </span>
        <span className={styles.span}>
            <i onClick={weixinShare} className={styles.iconfont}>&#xe6b8;</i>
            微信转发
        </span>
    </div>
}
