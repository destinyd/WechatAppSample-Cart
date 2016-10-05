//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cart: {},
    goods: []
  },
  onLoad: function () {
    var cart = app.get_cart()
    var goods = []
    for(var good_id in cart){
      goods.push(app.get_good(good_id))
    }
    this.setData({
        cart: app.get_cart(),
        goods: goods
    })
  },
})
