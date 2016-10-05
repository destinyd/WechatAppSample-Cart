//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    goods: [
      {
        "id": 240,
        "name": "可口可乐500ml",
        "desc": "",
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/xIfIOJxi.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/xIfIOJxi.jpg-d"
      },
      {
        "id": 241,
        "name": "可口可乐零度500ml",
        "desc": "",
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/tKUsCiLu.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/tKUsCiLu.jpg-d"
      },
      {
        "id": 242,
        "name": "可口可乐零度灌装330ml",
        "desc": null,
        "price": "3.0",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/j1cD3TQd.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/j1cD3TQd.jpg-d"
      },
      {
        "id": 239,
        "name": "百岁山矿泉水",
        "desc": "",
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/cD4VSorB.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/cD4VSorB.jpg-d"
      },
      {
        "id": 250,
        "name": "可口可乐1.5L",
        "desc": null,
        "price": "5.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/umueuaF0.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/umueuaF0.jpg-d"
      },
      {
        "id": 252,
        "name": "可口可乐灌装330ml",
        "desc": "",
        "price": "2.5",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/p6o8agsz.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/p6o8agsz.jpg-d"
      },
      {
        "id": 255,
        "name": "百事可乐600ml",
        "desc": null,
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/aL7dQtqf.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/aL7dQtqf.jpg-d"
      },
      {
        "id": 256,
        "name": "百事可乐灌装330ml",
        "desc": "",
        "price": "2.5",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/nrkZDQX4.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/nrkZDQX4.jpg-d"
      },
      {
        "id": 257,
        "name": "雪碧柠檬500ml",
        "desc": null,
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/wFe3otQ2.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/wFe3otQ2.jpg-d"
      },
      {
        "id": 259,
        "name": "雪碧灌装330ml",
        "desc": null,
        "price": "2.5",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/qHx0jce3.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/qHx0jce3.jpg-d"
      },
      {
        "id": 260,
        "name": "芬达",
        "desc": "口味：葡萄味，青柠味，橙子味，蜜桃味，苹果味。购买时请备注好口味",
        "price": "3.0",
        "unit": "瓶装",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/cs5V8p7Q.png-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/cs5V8p7Q.png-d"
      },
      {
        "id": 266,
        "name": "芬达橙子味灌装330ml",
        "desc": null,
        "price": "3.0",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/cQRsBZ3O.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/cQRsBZ3O.jpg-d"
      },
      {
        "id": 325,
        "name": "可口可乐1.25L",
        "desc": null,
        "price": "5.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/WoNfCTc2.png-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/WoNfCTc2.png-d"
      },
      {
        "id": 326,
        "name": "雪碧柠檬1.25L",
        "desc": null,
        "price": "6.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/KScikqGq.png-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/KScikqGq.png-d"
      },
      {
        "id": 327,
        "name": "百事可乐1.25L",
        "desc": null,
        "price": "5.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/hVpc5NWy.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/hVpc5NWy.jpg-d"
      },
      {
        "id": 392,
        "name": "摩拉菲尔酸奶205ml",
        "desc": "口味：红枣枸杞 、原味。购买时请备注口味",
        "price": "5.5",
        "unit": "盒",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/YeL3yN9R.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/YeL3yN9R.jpg-d"
      },
      {
        "id": 393,
        "name": "维他奶系列250ml",
        "desc": "口味：原味、黑豆味、香草味、麦香味。购买时请备注口味",
        "price": "3.0",
        "unit": "盒",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/of0yhZCz.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/of0yhZCz.jpg-d"
      },
      {
        "id": 264,
        "name": "怡泉+c柠檬味汽水330ml",
        "desc": null,
        "price": "3.0",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/AKBAOzJZ.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/AKBAOzJZ.jpg-d"
      }
    ],
  },
  //事件处理函数
  bindViewTap: function(e) {
    var good_id = e.currentTarget.dataset.goodId;
    wx.navigateTo({
      url: '../goods/show?good_id=' + good_id,
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  handle_click_cart_icon: app.handle_click_cart_icon
})
