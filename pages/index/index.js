//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
    catesData:[],
    getHotPerdata:[],
    tourData:[],
    vocalData:[],
    musicData:[],
    dramaData:[],
    sportData:[],
    artcles:[],
    
  },
  onLoad: function (options) {
    this.getbanner(); //banner列表
    this.getCates(); //icon列表
    this.getHotPerForms();  //热门演出
    this.tour()  //巡演聚合
    this.vocal() //演唱会
    this.music() //音乐会
    this.drama() //话剧
    this.sport() //体育赛事
    this.artcles() //演出资迅推荐
  },
  pathto(e){
    // console.log(e.target.dataset)
    var webview = e.target.dataset.webview
    wx.navigateTo({
      url: '/pages/webview/webview?webview='+webview
    })
  },
  getbanner(){
    let _this = this;
    wx.request({
      url:`${app.globalData.baseURL}/api/home/getBanners`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
           imgUrls:res.data.data
        });
        // console.log(res.data.data)
      }
    })
  },
  getCates(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getCates`,
      header: {
        'content-type': 'application/json'// 默认值
      },
      success(res) {
        // console.log(res)

        _this.setData({
          catesData:res.data.data
        })
        // this.catesData=res.data
        // console.log(res.data)
      }
    })
  },
  getHotPerForms(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getHotPerforms`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data.data)
        var result=[]
        for (var i = 0; i < res.data.data.length; i+=3) {
          result.push(res.data.data.slice(i,i + 3));
        }
        _this.setData({
          getHotPerdata: result
        });
      }
    })
  },
  tour(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getRoadShows`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        _this.setData({
          tourData: res.data.data
        });
      }
    })
  },
  vocal(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getYanChanghuis`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        _this.setData({
          vocalData: res.data.data
        });
      }
    })
  },
  music(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getMusicales`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data.data)
        _this.setData({
          musicData: res.data.data
        });
      }
    })
  },
  drama(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getModernDramas`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        _this.setData({
          dramaData: res.data.data
        });
      }
    })
  },
  sport(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getSportsEvents`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data.data)
        _this.setData({
          sportData: res.data.data
        });
      }
    })
  },
  artcles(){
    let _this = this;
    wx.request({
      url: `${app.globalData.baseURL}/api/home/getArticles`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        _this.setData({
          artcles: res.data.data
        });
      }
    })
  }


})