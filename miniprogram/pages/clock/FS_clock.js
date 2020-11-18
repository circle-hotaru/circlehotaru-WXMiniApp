// miniprogram/pages/clock/FS_clock.js.js
var interval_id = null;
var bgm = wx.getBackgroundAudioManager();
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_color: "#fff",
    background_color: "#000",
    bgm_on: false,

    hour: "00",
    minute: "00",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      text_color: options.text_color,
      background_color: options.background_color,
      bgm_on: (options.bgm_on == 'true') ? true : false,
    });

    var navigation_text_color = options.background_color == "#fff" ? "#000000" : "#ffffff";
    
    wx.setNavigationBarColor({
      backgroundColor: this.data.background_color,
      frontColor: navigation_text_color,
    });

    wx.setNavigationBarTitle({
      title: '当前时间',
    });

    wx.setKeepScreenOn({
      keepScreenOn: true,
    });

    this.updateTime();

    if (this.data.bgm_on) {
      app.playMusic();
  }; 

    var that = this

    interval_id = setInterval(function(){that.updateTime()}, 1000);
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
    clearInterval(interval_id);
    
    bgm.pause();

    wx.setKeepScreenOn({
      keepScreenOn: false,
    })
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
    return {
      title: '高颜值全屏计时工具',
      imageUrl: '../../images/awesome.jpg'
    }
  },

  updateTime: function() {
    var current_time = new Date();

    this.setData({
      hour: ('0' + current_time.getHours()).slice(-2),
      minute: ('0' + current_time.getMinutes()).slice(-2),
    })
  },
})