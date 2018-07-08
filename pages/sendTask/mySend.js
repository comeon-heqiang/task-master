Page({
  data: {
    swiperHeight: 0,
    current: 0,
    itemData:[1,2,3,4,5,6],
    itemData2:[1,2],
    classifyList: ['我的发布', '待审核任务']
  },
  onLoad: function(options) {
    //Do some initialize when page load.
  },
  onReady: function() {
    //Do some when page ready.
    this.autoHeight(".send-item",this.data.itemData.length)
  },
  // 分类栏点击切换
  currentChange: function(e) {
    var _this = this;
    var num = e.currentTarget.dataset.current;
    if (_this.data.current == num) {
      return false;
    }   
    _this.setData({
      current: num
    });
  },
  // swiper切换
  swiperChange(e) {
    var _this = this;
    var elm = e.detail.current == 1 ? ".send-item" : ".send-item";
    var length=e.detail.current==1?_this.data.itemData2.length:_this.data.itemData.length;
    this.autoHeight(elm,length);
    this.setData({
      current: e.detail.current
    });
  },
   // swiper高度计算
   autoHeight: function (elm,length) {
    var _this = this;
    var query = wx.createSelectorQuery();
    query.selectAll(elm).boundingClientRect(function (rects) {
        console.log(rects[0])
      _this.setData({
        swiperHeight: rects[0].height * length
      })
    }).exec();
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
});
