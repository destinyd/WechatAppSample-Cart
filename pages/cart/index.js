//index.js
//获取应用实例
var app = getApp()
var regx_minus = /btn-minus-(\d+)/
var regx_plus = /btn-plus-(\d+)/
Page({
  data: {
    cart: {},
    goods: [],
    total: 0.0
  },
  onLoad: function () {
    this.init()
  },
  handle_click: function(e){
    var id = e.target.id
    if(id){
      var good_id = e.currentTarget.dataset.goodId;
      if(id.match(regx_minus)){
        app.change_amount(good_id, -1, this.handle_change_amount)
      }
      if(id.match(regx_plus)){
        app.change_amount(good_id, 1, this.handle_change_amount)
      }
    }
  },
  handle_change_amount: function(){
    this.init()
  },
  init: function(){
    var cart = app.get_cart()
    var goods = []
    var total = 0.0
    for(var good_id in cart){
      var good = app.get_good(good_id)
      goods.push(good)
      total += good.price * cart[good_id]
    }
    this.setData({
        cart: cart,
        goods: goods,
        total
    })
  }
})
