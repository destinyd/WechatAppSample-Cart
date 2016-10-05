//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    good_hash: {
      "239": {
        "id": 239,
        "name": "百岁山矿泉水",
        "desc": "",
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/cD4VSorB.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/cD4VSorB.jpg-d"
      },
      "240": {
        "id": 240,
        "name": "可口可乐500ml",
        "desc": "",
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/xIfIOJxi.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/xIfIOJxi.jpg-d"
      },
      "241": {
        "id": 241,
        "name": "可口可乐零度500ml",
        "desc": "",
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/tKUsCiLu.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/tKUsCiLu.jpg-d"
      },
      "242": {
        "id": 242,
        "name": "可口可乐零度灌装330ml",
        "desc": null,
        "price": "3.0",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/j1cD3TQd.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/j1cD3TQd.jpg-d"
      },
      "250": {
        "id": 250,
        "name": "可口可乐1.5L",
        "desc": null,
        "price": "5.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/umueuaF0.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/umueuaF0.jpg-d"
      },
      "252": {
        "id": 252,
        "name": "可口可乐灌装330ml",
        "desc": "",
        "price": "2.5",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/p6o8agsz.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/p6o8agsz.jpg-d"
      },
      "255": {
        "id": 255,
        "name": "百事可乐600ml",
        "desc": null,
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/aL7dQtqf.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/aL7dQtqf.jpg-d"
      },
      "256": {
        "id": 256,
        "name": "百事可乐灌装330ml",
        "desc": "",
        "price": "2.5",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/nrkZDQX4.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/nrkZDQX4.jpg-d"
      },
      "257": {
        "id": 257,
        "name": "雪碧柠檬500ml",
        "desc": null,
        "price": "3.0",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/wFe3otQ2.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/wFe3otQ2.jpg-d"
      },
      "259": {
        "id": 259,
        "name": "雪碧灌装330ml",
        "desc": null,
        "price": "2.5",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/qHx0jce3.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/qHx0jce3.jpg-d"
      },
      "260": {
        "id": 260,
        "name": "芬达",
        "desc": "口味：葡萄味，青柠味，橙子味，蜜桃味，苹果味。购买时请备注好口味",
        "price": "3.0",
        "unit": "瓶装",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/cs5V8p7Q.png-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/cs5V8p7Q.png-d"
      },
      "264": {
        "id": 264,
        "name": "怡泉+c柠檬味汽水330ml",
        "desc": null,
        "price": "3.0",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/AKBAOzJZ.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/AKBAOzJZ.jpg-d"
      },
      "266": {
        "id": 266,
        "name": "芬达橙子味灌装330ml",
        "desc": null,
        "price": "3.0",
        "unit": "灌",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/cQRsBZ3O.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/cQRsBZ3O.jpg-d"
      },
      "325": {
        "id": 325,
        "name": "可口可乐1.25L",
        "desc": null,
        "price": "5.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/WoNfCTc2.png-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/WoNfCTc2.png-d"
      },
      "326": {
        "id": 326,
        "name": "雪碧柠檬1.25L",
        "desc": null,
        "price": "6.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/KScikqGq.png-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/KScikqGq.png-d"
      },
      "327": {
        "id": 327,
        "name": "百事可乐1.25L",
        "desc": null,
        "price": "5.5",
        "unit": "瓶",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/hVpc5NWy.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/hVpc5NWy.jpg-d"
      },
      "392": {
        "id": 392,
        "name": "摩拉菲尔酸奶205ml",
        "desc": "口味：红枣枸杞 、原味。购买时请备注口味",
        "price": "5.5",
        "unit": "盒",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/YeL3yN9R.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/YeL3yN9R.jpg-d"
      },
      "393": {
        "id": 393,
        "name": "维他奶系列250ml",
        "desc": "口味：原味、黑豆味、香草味、麦香味。购买时请备注口味",
        "price": "3.0",
        "unit": "盒",
        "img": "http://o6wlxof9f.bkt.clouddn.com/i/of0yhZCz.jpg-g",
        "detail_img": "http://o6wlxof9f.bkt.clouddn.com/i/of0yhZCz.jpg-d"
      }
    }
  },
  get_cart: function(){
    return wx.getStorageSync("cart") || {}
  }
})