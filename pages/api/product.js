// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default () => {
  const res = {};
  res.statusCode = 200;
  res.json = {
    data: [
      {
        title: '商业数据产品', children: [
          { name: '三先', url: 'https://bigdata.autohome.com.cn/OEMSolution/assert/#/' },
          { name: '神笔马良', url: 'https://bigdata.autohome.com.cn/proDC/assert/#/' },
          { name: 'Smart Sales', url: 'https://bigdata.autohome.com.cn/sales/assert/#/' },
          { name: '车智库', url: 'https://bigdata.autohome.com.cn/smartRD/assert/#/' },
          { name: '产品改款', url: 'https://bigdata.autohome.com.cn/proRestyle/assert/#/' },
          { name: '传播验证', url: 'https://bigdata.autohome.com.cn/proLaunch/assert/#/' },
          { name: '竞争格局', url: 'https://bigdata.autohome.com.cn/compete/assert/#/shichang' }
        ]
      },
      {
        title: 'VR', children: [
          { name: '818超级车展', url: 'http://vr.autohome.com.cn/vr818/30000' },
        ]
      },
      {
        title: '平台产品', children: [
          { name: '智能营销包装', url: 'http://smart.listed.autohome.com.cn/#/index' },
          { name: '广告模板', url: 'http://uts.corpautohome.com/' }, 
          { name: '智能营销投放系统', url: 'http://smartmarket.bg.autohome.com.cn/' },
          { name: '自助营销平台', url: 'http://athena.autohome.com.cn/smp-business/' },
          { name: '活动运营平台', url: 'http://activity.in.autohome.com.cn/emp-admin/' },
          { name: '线索分发平台', url: 'https://send.corpautohome.com/terminal' },
          { name: '宙斯平台', url: 'http://zs.yz.test.autohome.com.cn/' }
        ]
      },
      {
        title: '创意产品', children: [
          { name: '智能落地页', url: 'https://leads.autohome.com.cn/landingpage/html/auto_m?seriesId=448&channelId=1' },
        ]
      },
      {
        title: '设计资源', children: [
          { name: '商业后台产品UI规范	', url: 'https://lanhuapp.com/web/#/item/project/board?pid=d8506bcc-84b5-4127-a175-6b65044607d2' },
          { name: '数据平台UI规范	', url: 'https://lanhuapp.com/web/#/item?fid=2e0d8ab0-eb8c-43c2-b104-9f37c0c9c6e0&commonly=all' },
          { name: '车展UI规范	', url: 'https://lanhuapp.com/web/#/item?fid=61251eea-6291-4052-8931-be8672697f99&commonly=all' },
          { name: '动效规范	', url: 'https://lanhuapp.com/web/#/item?fid=d0c41857-9956-4d19-927f-da5709f489af&commonly=all' },
          { name: '运营视觉规范	', url: 'https://lanhuapp.com/web/#/item?fid=779b6b2c-dd08-4472-8312-0b0f9253af66&commonly=all' },
          { name: '3D展馆规范	', url: 'https://lanhuapp.com/web/#/item?fid=2d7f6e13-ac95-4cc5-a4aa-122710ab5019&commonly=all' },

        ]
      },
      {
        title: '监控平台', children: [
          { name: 'Apollo', url: 'https://bigdata.autohome.com.cn/autoApollo/assert/#/momentView' },
        ]
      },
      {
        title: '技术沉淀', children: [
          { name: 'React组件库', url: 'http://newtestbigdata.yz.test.autohome.com.cn/PBLVI/assert/master/#/LossNew' },
          { name: '车智云业务组件库', url: 'http://adfe-dev.corpautohome.com:9677/RankChange' },
          { name: 'react脚手架', url: 'http://wiki.corpautohome.com/pages/viewpage.action?pageId=125000759' },
          { name: 'vue组件库', url: 'http://10.168.66.34:8098/#/usage/installation' }
        ]
      }
    ]
  };
  return res;
}
