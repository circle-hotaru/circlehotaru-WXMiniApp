// miniprogram/pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_color: '#fff',
    background_color: '#ff8040',

    colors: [
      { name: '000000', value: '#000000'},
      { name: 'f3eab3', value: '#f3eab3'},
      { name: 'fcfaf1', value: '#fcfaf1'},
      { name: '71ab7f', value: '#71ab7f'},
      { name: '88d3ea', value: '#88d3ea'},
      { name: '074f71', value: '#074f71'},
      { name: 'daaa00', value: '#daaa00'},
      { name: 'ff8040', value: '#ff8040'},
      { name: 'ffffff', value: '#ffffff'},
      { name: '434c5c', value: '#434c5c'},
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
      imageUrl: '../../images/awesome.jpg'
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