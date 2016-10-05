//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    loading: true,
    good_id: null,
    good: null,
    show_toast: false
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
    this.setData({
        good: app.globalData.good_hash[this.data.good_id],
        loading: false
    })
  },
  loadingChange: function(){
    this.setData({
      loading: false
    })
  },
  bind_add_to_cart: function(){
    var good_id = this.data.good_id
    app.change_amount(good_id, 1, this.show_toast)
  },
  toast2Change: function(){
    this.set_show_toast(false)
  },
  set_show_toast: function(b){
    this.setData({
      show_toast: b
    })
  },
  show_toast: function(){
    this.set_show_toast(true);
  },
  handle_click_cart_icon: app.handle_click_cart_icon
})