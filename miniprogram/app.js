//app.js
var bgm = wx.getBackgroundAudioManager();

// auto check update
// https://blog.csdn.net/original_heart/article/details/84258985

var check_update = new Promise(function(resolve, reject){
  const updateManager = wx.getUpdateManager();
  updateManager.onCheckForUpdate(function(res){
    if (res.hasUpdate) {
      updateManager.onUpdateReady(function(){
        wx.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启应用？",
          success: function(res){
            if (res.confirm) {
              updateManager.applyUpdate();
            }
            resolve(res);
          }
        })
      })
    } else {
      resolve("no update")
    }
  })
})

App({
  globalData: {
    playlist: [],
    songIndex: 0,
  },
  onLaunch: function () {
    
    wx.cloud.init({
      // env 参数说明：
      //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
      //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
      //   如不填则使用默认环境（第一个创建的环境）
      // env: 'my-env-id',
      traceUser: true,
    })

    check_update.then(function(res){
      wx.setKeepScreenOn({
        keepScreenOn: true,
      })
    })

    // 获取歌单
    this.getPlaylist()
  },

  // 播放音乐 https://www.jianshu.com/p/e1d210a978a7

  playMusic: function() {
    let song = this.globalData.playlist[this.globalData.songIndex];
    bgm.title = song.name || "音频标题";
    bgm.epname = song.al.name || "专辑名称";
    bgm.singer = song.ar[0].name || "歌手名";

    // 获取单曲url
    this.getSongUrl(song.id)

    let that = this;

    bgm.onPlay(function() {
      console.log("======onPlay======");
    });

    bgm.onEnded(function() {
      console.log("======onEnded======");
      setTimeout(function() {
        that.nextMusic();
      }, 1500);
    });
  },
  // 下一首 https://www.jianshu.com/p/e1d210a978a7
  nextMusic: function() {
    var that = this
    let songIndex = that.globalData.songIndex < that.globalData.playlist.length - 1 ? that.globalData.songIndex + 1 : 0;
      that.globalData.songIndex = songIndex,
    setTimeout(function() {
      that.playMusic();
    }.bind(that), 1000);
  },

  // 获取歌单
  getPlaylist: function(){
    var that = this
    wx.cloud.callFunction({ name:"getPlaylist",data:{
      "id":"5340244661"
    }}).then(res => {
      that.globalData.playlist = res.result.playlist.tracks      
    }).catch(console.error)
  },

  // 获取单曲url
  getSongUrl: function (id) {
    wx.cloud.callFunction({ name:"getSongUrl",data:{
      "id": id
    }}).then(res => {  
      bgm.src = res.result.data[0].url 
    }).catch(console.error)
  }
})
