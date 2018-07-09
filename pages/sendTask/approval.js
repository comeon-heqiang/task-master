var util = require('../../utils/util.js');
Page({
    data: {
        getDate:"",
        picData:['/assets/images/renwu.png','/assets/images/renwu.png','/assets/images/renwu.png']
    },
    onLoad: function(options) {
        //Do some initialize when page load.
        var time = util.formatTime(new Date());
        this.setData({
            getDate:time
        })
    },
    onReady: function() {
        //Do some when page ready.
        
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
        
    }
})