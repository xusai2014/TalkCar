export function shareFunc(wx, {
    title,
    desc,
    link,
    imgUrl,
    dataUrl,
    type = 'link',
    success
}) {
    wx.ready(function () {
        wx.checkJsApi({
          jsApiList: [
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
            'updateAppMessageShareData',
            'updateTimelineShareData'
          ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function(res) {
            console.log('checkJsApi:', res)
            if(res.checkResult.updateAppMessageShareData) {
                wx.updateAppMessageShareData({ 
                    title,
                    desc,
                    link,
                    imgUrl,
                    success: function () {
                      // 设置成功
                    }
                })
            } else if(res.checkResult.onMenuShareAppMessage){
                wx.onMenuShareAppMessage({
                    title,
                    desc,
                    link,
                    imgUrl,
                    type,
                    dataUrl,
                    success: function () {
                      // 用户点击了分享后执行的回调函数
                    }
                  });
                  
    
            }
          }
        })
    }); 
}