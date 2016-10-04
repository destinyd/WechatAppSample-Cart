//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    loading: true
  },
  onLoad: function (options) { 
    this.setData({
      good_id: options.good_id,
      good: null
    })
  },
})