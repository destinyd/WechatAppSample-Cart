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
    var cart = app.get_cart()
    console.log(cart)
    console.log(cart[this.data.good_id])
    console.log(typeof(cart[this.data.good_id]))
    amount = Number(cart[this.data.good_id])
    amount += 1
    cart[this.data.good_id] = amount

    that = this
    wx.setStorage({
      key: "cart",
      data: cart,
      success: function(){
        that.set_show_toast(true)
      },
      fail: function(){
        console.log("fail")
      }
    })
  },
  toast2Change: function(){
    this.set_show_toast(false)
  },
  set_show_toast: function(b){
    this.setData({
      show_toast: b
    })
  },
  handle_click_cart_icon: app.handle_click_cart_icon
})