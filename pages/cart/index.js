//index.js
//获取应用实例
var app = getApp()
var regx_minus = /btn-minus-(\d+)/
var regx_plus = /btn-plus-(\d+)/
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
    this.setData({
      cart: app.get_cart()
    })
    // if(amount == 0){
    //   document.
    // }
  }
})
