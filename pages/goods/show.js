//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    loading: true,
    good_id: null,
    good: null
  },
  onLoad: function (options) { 
    this.setData({
      good_id: options.good_id,
      good: null
    })
  },
  onReady: function(){
    this.load();
  },
  load: function(){
    console.log('load');
    this.setData({
        good: app.globalData.good_hash[this.data.good_id],
        loading: false
    })
  },
  loadingChange: function(){
    this.setData({
      loading: false
    })
  }
})