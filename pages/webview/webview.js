//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    path:'http://www.baidu.com'
  },
  onLoad: function (options) {
    // console.log(options,11)
    var webview = options['webview'];
    // console.log(webview)
      this.setData({
        path:webview
      })
    
    
    // console.log(this.data.path)

  }


})