// pages/scrollv/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows: [{ id: 0 ,scrollH:0}],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        let scrollH = res.windowHeight;
        self.setData({
          scrollH: scrollH
        });
      }
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tap: function () {
    console.log("zzzz")
    var that = this;
    that.data.rows.push({ id: that.data.rows.length + 2 })
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    that.setData({ rows: that.data.rows })

  },
  uu:function(){
    console.log("============================")
    console.log("zzzzttttt")
    var that = this;
    that.data.rows.push({ id: that.data.rows.length + 2 })
    that.data.rows.push({ id: that.data.rows.length + 2 })
    that.data.rows.push({ id: that.data.rows.length + 2 })
    that.data.rows.push({ id: that.data.rows.length + 2 })
    that.data.rows.push({ id: that.data.rows.length + 2 })
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    that.setData({ rows: that.data.rows })
  }


})