//index.js
//reference :https://blog.csdn.net/dengpeng0419/article/details/54382085
//获取应用实例
const app = getApp()

Page({
  data: {
    rows:[{id:0}],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  
  },
  tap:function(){
    console.log("zzzz")
    var that= this;
    that.data.rows.push({id:that.data.rows.length+2})
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    that.setData({rows:that.data.rows})
    
  },
  onPullDownRefresh: function () {
    console.log("ppppppppppp")
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.hideNavigationBarLoading() //完成停止加载

    var that = this;
    that.data.rows.push({ id: that.data.rows.length + 2 })
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    that.setData({ rows: that.data.rows })
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  onReachBottom: function () {
    console.log('hi')
  
    var that = this;
    that.data.rows.push({ id: that.data.rows.length + 2 })
    console.log("eeeeeeeeeeeeeeeeeeeeeeee")
    that.setData({ rows: that.data.rows })
   

  }



  
})
