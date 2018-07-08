var util = require('../../utils/util.js');
Page({
    data: {
        getDate:"",
        picData:['/assets/images/pro1.jpg','/assets/images/pro1.jpg']
    },
    onLoad: function(options) {
    
        //Do some initialize when page load.
        //Do some when page ready.
        var time = util.formatTime(new Date());
        this.setData({
            getDate:time
        })
    },
    onReady: function() {
        
    },
    onShow: function() {
        //Do some when page show.
        
    },
    onHide: function() {
        //Do some when page hide.
        
    },
    onUnload: function() {
        //Do some when page unload.
        
    },
    onPullDownRefresh: function() {
        //Do some when page pull down.
        
    },
    // 上传图片事件
    uploadFile:function(){
        var that=this;
        wx.chooseImage({
            count: 2,	// 默认为9
            sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
            sourceType: ['album', 'camera'],	// 指定图片来源
            success: function(res) {
                var tempFilePaths = res.tempFilePaths;
                that.data.picData.push(tempFilePaths[0])
                console.log(that.data.picData)
            //    wx.uploadFile({
            //        url: '',
            //        filePath: filePath,
            //        name: 'file',
            //    })
            }
        })
    }
})