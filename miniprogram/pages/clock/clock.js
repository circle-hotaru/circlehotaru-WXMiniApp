// miniprogram/pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_color: '#fff',
    background_color: '#000',

    colors: [
      { name: '黑色', value: '#000'},
      { name: '白色', value: '#fff'},
      { name: '珊瑚粉', value: '#f4c2c2'},
      { name: '蛋白色', value: '#fce6c9'},
      { name: '蓝绿色', value: '#58e2c2'},
    ],

    bgm_on: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    return {
      title: '高颜值全屏计时工具',
      imageUrl: '../../images/share.jpg'
    }
  },

  changeBackgroundColor: function(e){
    this.setData({
      background_color: e.currentTarget.dataset.value
    })
  },

  changeTextColor: function(e){
    this.setData({
      text_color: e.currentTarget.dataset.value
    })
  },

  goToClock: function() {
    var text_color = this.data.text_color;
    var background_color = this.data.background_color;
    var bgm_on = this.data.bgm_on;

    wx.navigateTo({
      url: './FS_clock?text_color=' + text_color + '&background_color=' + background_color + '&bgm_on=' + bgm_on,
    })
  },

  changeBgm: function() {
    var bgm_on = this.data.bgm_on;

    this.setData({
      bgm_on: !bgm_on,
    })
  }
})