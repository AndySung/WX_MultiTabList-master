// pages/myCoupon/myCoupon.js

let staticPageNumber = 4;

var tangfa_img = [ "https://www.song0123.com/uploads/20200723/a0c6871290d99328dba78c886a521dc8.jpeg", "https://www.song0123.com/uploads/20200723/76853e21ee3372e80b403293be018df7.jpeg", "https://www.song0123.com/uploads/20200723/107baa263c5bd66a0abf1322d9fefc69.jpeg", "https://www.song0123.com/uploads/20200723/848745d716e55b61e07dfff050aad4dc.jpeg", "https://www.song0123.com/uploads/20200723/d1fb7b9f288b32235ec84579431d75eb.jpeg"];
  var zhifa_img = [ "https://www.song0123.com/uploads/20200723/211db795be50fdecc72a28cc42912623.jpeg", "https://www.song0123.com/uploads/20200723/62d09f67eaab2b603906c1fc51b14c13.jpeg", "https://www.song0123.com/uploads/20200723/96fab5d474ea0fc27e85aca641047e0b.jpeg", "https://www.song0123.com/uploads/20200723/590725e35bd8d06e1cabeb5cfcfda481.jpeg", "https://www.song0123.com/uploads/20200723/e020e7349ed20c365e02f89a81ff52f6.jpeg"];
  var secai_img = [ "https://www.song0123.com/uploads/20200723/4cb1f323f1063704757e2e267e433b73.jpeg", "https://www.song0123.com/uploads/20200723/03fd990125b7ceb0c015c7b1d155a368.jpeg", "https://www.song0123.com/uploads/20200723/e4232ae6a652872c26e0b2b6f39422e8.jpeg", "https://www.song0123.com/uploads/20200723/e76e20cfea725c39a0190a74c2d21bbf.jpeg"];
  var daomo_img = [ "https://www.song0123.com/uploads/20200723/d118fe0716edb942b14f57256c7b76b6.jpeg", "https://www.song0123.com/uploads/20200723/b537fcd954e405900b2694fed0cffddf.jpeg", "https://www.song0123.com/uploads/20200723/3c5de66220096f61b416b8845dbe8c94.jpeg", "https://www.song0123.com/uploads/20200723/2b0ddddb1c49a13c16b3d32f1a0b47ed.jpeg"];
  var black_img = [ "https://www.song0123.com/uploads/20200723/0642d6db7a01d52ef76a127e75a53e24.jpeg", "https://www.song0123.com/uploads/20200723/84f490104d9613cc6bd93aafa422e855.jpeg", "https://www.song0123.com/uploads/20200723/1a61fc865cc321a95da430b18e010ad1.jpeg", "https://www.song0123.com/uploads/20200723/002569f0906d7fabd4ae64d8f214f087.jpeg"];
  var tf_price_long_hair = ["\xa0¥198\xa0\xa0\xa0\xa0\xa0\xa0¥180\xa0\xa0\xa0\xa0\xa0\xa0¥168", "\xa0¥258\xa0\xa0\xa0\xa0\xa0\xa0¥232\xa0\xa0\xa0\xa0\xa0\xa0¥219", "\xa0¥318\xa0\xa0\xa0\xa0\xa0\xa0¥286\xa0\xa0\xa0\xa0\xa0\xa0¥270", "\xa0¥368\xa0\xa0\xa0\xa0\xa0\xa0¥331\xa0\xa0\xa0\xa0\xa0\xa0¥312", "\xa0¥428\xa0\xa0\xa0\xa0\xa0\xa0¥385\xa0\xa0\xa0\xa0\xa0\xa0¥363"];
  var tf_price_short_hair = ["\xa0¥168\xa0\xa0\xa0\xa0\xa0\xa0¥152\xa0\xa0\xa0\xa0\xa0\xa0¥142", "\xa0¥218\xa0\xa0\xa0\xa0\xa0\xa0¥196\xa0\xa0\xa0\xa0\xa0\xa0¥185", "\xa0¥278\xa0\xa0\xa0\xa0\xa0\xa0¥251\xa0\xa0\xa0\xa0\xa0\xa0¥235", "\xa0¥328\xa0\xa0\xa0\xa0\xa0\xa0¥295\xa0\xa0\xa0\xa0\xa0\xa0¥278", "\xa0¥388\xa0\xa0\xa0\xa0\xa0\xa0¥350\xa0\xa0\xa0\xa0\xa0\xa0¥310"];
  //直发系列
  var zf_price_long_hair =  ["\xa0¥198\xa0\xa0\xa0\xa0\xa0\xa0¥180\xa0\xa0\xa0\xa0\xa0\xa0¥168", "\xa0¥258\xa0\xa0\xa0\xa0\xa0\xa0¥232\xa0\xa0\xa0\xa0\xa0\xa0¥219", "\xa0¥318\xa0\xa0\xa0\xa0\xa0\xa0¥286\xa0\xa0\xa0\xa0\xa0\xa0¥270", "\xa0¥368\xa0\xa0\xa0\xa0\xa0\xa0¥331\xa0\xa0\xa0\xa0\xa0\xa0¥312", "\xa0¥428\xa0\xa0\xa0\xa0\xa0\xa0¥385\xa0\xa0\xa0\xa0\xa0\xa0¥363"];
  var zf_price_short_hair =  ["\xa0¥168\xa0\xa0\xa0\xa0\xa0\xa0¥152\xa0\xa0\xa0\xa0\xa0\xa0¥142", "\xa0¥218\xa0\xa0\xa0\xa0\xa0\xa0¥196\xa0\xa0\xa0\xa0\xa0\xa0\xa0¥185", "\xa0¥278\xa0\xa0\xa0\xa0\xa0\xa0¥251\xa0\xa0\xa0\xa0\xa0\xa0¥235", "\xa0¥328\xa0\xa0\xa0\xa0\xa0\xa0¥295\xa0\xa0\xa0\xa0\xa0\xa0¥278", "\xa0¥388\xa0\xa0\xa0\xa0\xa0\xa0¥350\xa0\xa0\xa0\xa0\xa0\xa0¥310"];
  //色彩系列
  var sc_price_long_hair = ["\xa0¥198\xa0\xa0\xa0\xa0\xa0\xa0¥180\xa0\xa0\xa0\xa0\xa0\xa0¥168", "\xa0¥238\xa0\xa0\xa0\xa0\xa0\xa0¥215\xa0\xa0\xa0\xa0\xa0\xa0¥202", "\xa0¥288\xa0\xa0\xa0\xa0\xa0\xa0¥259\xa0\xa0\xa0\xa0\xa0\xa0¥245", "\xa0¥368\xa0\xa0\xa0\xa0\xa0\xa0¥331\xa0\xa0\xa0\xa0\xa0\xa0¥312"];
  var sc_price_short_hair = ["\xa0¥168\xa0\xa0\xa0\xa0\xa0\xa0¥152\xa0\xa0\xa0\xa0\xa0\xa0¥142", "\xa0¥208\xa0\xa0\xa0\xa0\xa0\xa0¥187\xa0\xa0\xa0\xa0\xa0\xa0¥176", "\xa0¥258\xa0\xa0\xa0\xa0\xa0\xa0¥232\xa0\xa0\xa0\xa0\xa0\xa0¥219", "\xa0¥318\xa0\xa0\xa0\xa0\xa0\xa0¥286\xa0\xa0\xa0\xa0\xa0\xa0¥270"];
  //倒膜系列
  var dm_price_long_hair = ["\xa0¥188/套\xa0\xa0\xa0\xa0\xa0¥169\xa0\xa0\xa0\xa0\xa0¥159", "\xa0¥258/套\xa0\xa0\xa0\xa0\xa0¥232\xa0\xa0\xa0\xa0¥219", "\xa0¥318/套\xa0\xa0\xa0\xa0\xa0¥286\xa0\xa0\xa0\xa0¥270", "\xa0¥388/套\xa0\xa0\xa0\xa0¥349\xa0\xa0\xa0\xa0\xa0¥329"];
  var dm_price_short_hair = ["\xa0¥58\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0¥52\xa0\xa0\xa0\xa0\xa0\xa0¥49", "\xa0¥88\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0¥79\xa0\xa0\xa0\xa0\xa0\xa0¥73", "\xa0¥128\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0¥115\xa0\xa0\xa0\xa0\xa0\xa0¥109", "\xa0¥168\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0¥151\xa0\xa0\xa0\xa0\xa0\xa0¥142"];
  //黑色系列
  var hs_price_long_hair = ["\xa0¥138\xa0\xa0\xa0\xa0\xa0\xa0¥125\xa0\xa0\xa0\xa0\xa0¥110", "\xa0¥168\xa0\xa0\xa0\xa0\xa0\xa0¥151\xa0\xa0\xa0\xa0\xa0¥142", "\xa0¥208\xa0\xa0\xa0\xa0\xa0\xa0¥187\xa0\xa0\xa0\xa0\xa0¥176", "\xa0¥258\xa0\xa0\xa0\xa0\xa0\xa0¥232\xa0\xa0\xa0\xa0\xa0¥219"];
  var hs_price_short_hair = ["\xa0¥108\xa0\xa0\xa0\xa0\xa0\xa0¥97\xa0\xa0\xa0\xa0\xa0\xa0¥92", "\xa0¥138\xa0\xa0\xa0\xa0\xa0\xa0¥125\xa0\xa0\xa0\xa0\xa0¥117", "\xa0¥168\xa0\xa0\xa0\xa0\xa0\xa0¥151\xa0\xa0\xa0\xa0\xa0\xa0¥142", "\xa0¥208\xa0\xa0\xa0\xa0\xa0\xa0¥187\xa0\xa0\xa0\xa0\xa0¥176"];


// 分页 list
class TabItem {
  constructor(title) {
    this.title = title;            // 标题
    this.list = [];                // 数据列表
    this.placeholder = "点击刷新";  // 占位提示（刷新、网络错误、空白）
    this.load_type = 0;            // 0表示不显示，1表示加载中，2表示已加载全部
  }
}

// 数据item
class ListItem {
  constructor() {
    this.image_tangfa = "";
    this.image_zhifa = "";
    this.image_secai = "";
    this.image_daomo = "";
    this.image_black = "";
    this.tf_price_long_hair = "";
    this.tf_price_short_hair = "";
    this.zf_price_long_hair = "";
    this.zf_price_short_hair = "";
    this.sc_price_long_hair = "";
    this.sc_price_short_hair = "";
    this.dm_price_long_hair = "";
    this.dm_price_short_hair = "";
    this.hs_price_long_hair = "";
    this.hs_price_short_hair = "";

    //this.title = this.price + "元红包";
    //this.date = ListItem.randomNumber(2017, 2020) + "-03-02";
  }
  static randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
}



// 空白页tip
function getEmptyTip(index) {
  return ["无可使用优惠券", "无已使用优惠券", "无已失效的优惠券"][index % 3];
}

// 假数据
function getFakeData(num = staticPageNumber) {
  var list = [];
  for (let i = 0; i < num; i++) {
    let item = new ListItem()
    item.image_tangfa = tangfa_img[i]
    item.image_zhifa = zhifa_img[i]
    item.image_secai = secai_img[i]
    item.image_daomo = daomo_img[i]
    item.image_black = black_img[i]
    item.tf_price_long_hair = tf_price_long_hair[i]
    item.tf_price_short_hair = tf_price_short_hair[i]
    item.zf_price_long_hair = zf_price_long_hair[i]
    item.zf_price_short_hair = zf_price_short_hair[i]
    item.sc_price_long_hair = sc_price_long_hair[i]
    item.sc_price_short_hair = sc_price_short_hair[i]
    item.dm_price_long_hair = dm_price_long_hair[i]
    item.dm_price_short_hair = dm_price_short_hair[i]
    item.hs_price_long_hair = hs_price_long_hair[i]
    item.hs_price_short_hair = hs_price_short_hair[i]
    list.push(item)
  }
  return list;
}

Page({
  data: {
    tabs: [
      new TabItem("烫发系列"),
      new TabItem("直发系列"),
      new TabItem("色彩系列"),
      new TabItem("倒膜系列"),
      new TabItem("黑色系列")
    ],
    stv: {
      windowWidth: 0,
      lineWidth: 0,
      offset: 0,
      tStart: false
    },
    activeTab: 0,
  },

  onLoad: function (options) {
    try {
      let { tabs } = this.data;
      var res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.stv.lineWidth = res.windowWidth / this.data.tabs.length;
      this.data.stv.windowWidth = res.windowWidth;
      this.setData({ stv: this.data.stv })
      this.tabsCount = tabs.length;
    } catch (e) {
      // 
    }
  },


  onShow: function () {
    this.loadCouponsAtIndexRefresh();
  },

  loadCouponsAtIndexRefresh(index = 0, isRefresh = true) {

    // loading
    // wx.showLoading({
    //   title: '加载中',
    // });

    // 显示加载更多
    // if (!isRefresh) {
    //   // 已经加载全部，则不再请求
    //   let config = this.data.tabs[index];

    //   // 已经全部加载完毕
    //   if (!config.load_type == 2) {
    //     return;
    //   }

    //   var tabs = this.data.tabs;
    //   tabs[index].load_type = 1;
    //   this.setData({
    //     tabs: tabs
    //   })
    // }

    setTimeout(() => {
      let res = {
        data: { code: 1 }
      };
      
      // fake
  
      

      wx.hideLoading();

      let that = this;
      let item = that.data.tabs[index];
      
      if(item.title == "烫发系列" || item.title == "直发系列"){
          res.list = getFakeData(5);
      }else{
          res.list = getFakeData(4);
      }
      var tips = item.placeholder;
      var list = item.list;

      console.log("item:"+item.title);
      console.log("list:"+list);


      // 请求成功
      if (res.data.code == 1) {
        if (res.list && res.list.length > 0) {
          if (isRefresh) {
            list = res.list;
          } else {
           // list.push(...res.list);
          }

          // 加载更多
          var tabs = this.data.tabs;
          tabs[index].load_type = res.list.length < staticPageNumber ? 2 : 0;
          console.log("count:"+tabs.length)
          tabs[index].list = list;

          that.setData({
            tabs: tabs
          })
          return;
        } else {
          tips = getEmptyTip(index);
        }
      } else {
        tips = res.msg.length > 0 ? res.msg : "网络错误";
      }
      tips += " 点击刷新";

      var tabs = this.data.tabs;
      tabs[index].placeholder = tips;

      that.setData({
        tabs: tabs
      })

    }, 600);
  },

  // 加载更多
  loadMore(e) {
    let currentIndex = e.currentTarget.dataset.index;
    let currentTab = this.data.tabs[currentIndex];
    if (currentTab.list.length > 0 && currentTab.load_type != 2) {
      this.loadCouponsAtIndexRefresh(currentIndex, false);
    }
  },

  // 刷新
  refresh(e) {
    let currentIndex = e.currentTarget.dataset.index;
    let currentTab = this.data.tabs[currentIndex];
    if (currentTab.list.length <= 0) {
      this.loadCouponsAtIndexRefresh(currentIndex);
    }
  },

  // 手势开始
  handlerStart(e) {
    let { clientX, clientY } = e.touches[0];
    this.startX = clientX;
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.data.stv.tStart = true;
    this.tapStartTime = e.timeStamp;
    this.setData({ stv: this.data.stv })
  },

  // 手势移动
  handlerMove(e) {
    let { clientX, clientY } = e.touches[0];
    let { stv } = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    stv.offset += offsetX;
    if (stv.offset <= 0) {
      stv.offset = 0;
    } else if (stv.offset >= stv.windowWidth * (this.tabsCount - 1)) {
      stv.offset = stv.windowWidth * (this.tabsCount - 1);
    }
    this.setData({ stv: stv });
  },

  // 手势取消
  handlerCancel(e) {

  },

  // 滑动手势完成
  handlerEnd(e) {
    let { clientX, clientY } = e.changedTouches[0];
    // 如果是点击手势，则屏蔽当前手势的事件处理
    if (Math.abs(this.tapStartX - clientX) < 1 && Math.abs(this.tapStartY - clientY) < 1) {
      return;
    }
    // 阻止干预scrollview的上下滑动体验
    if (Math.abs(this.data.stv.offset - 0) < 1 || Math.abs(this.data.stv.offset - this.data.windowWidth) < 1) {
      return;
    }
    let endTime = e.timeStamp;
    let { tabs, stv, activeTab } = this.data;
    let { offset, windowWidth } = stv;

    //快速滑动
    if (endTime - this.tapStartTime <= 300) {
      //向左
      if (Math.abs(this.tapStartY - clientY) < 50) {
        if (this.tapStartX - clientX > 5) {
          if (activeTab < this.tabsCount - 1) {
            let page = ++activeTab;
            this.reloadPageIfEmpty(page);
            this.setData({ activeTab: page })
          }
        } else {
          if (activeTab > 0) {
            let page = --activeTab;
            this.reloadPageIfEmpty(page);
            this.setData({ activeTab: page })
          }
        }
        stv.offset = stv.windowWidth * activeTab;
      } else {
        //快速滑动 但是Y距离大于50 所以用户是左右滚动
        let page = Math.round(offset / windowWidth);
        if (activeTab != page) {
          this.setData({ activeTab: page })
          this.reloadPageIfEmpty(page);
        }
        stv.offset = stv.windowWidth * page;
      }
    } else {
      let page = Math.round(offset / windowWidth);

      if (activeTab != page) {
        this.setData({ activeTab: page })
        this.reloadPageIfEmpty(page);
      }
      stv.offset = stv.windowWidth * page;
    }

    stv.tStart = false;
    this.setData({ stv: this.data.stv })
  },

  // item点击
  itemTap(e) {
    //console.log(e);
    var index = e.currentTarget.dataset.index;
      var priceLongArr = [];
      var priceShortArr = [];
      var tf_long = Object.keys(tf_price_long_hair);
      var tf_short = Object.keys(tf_price_short_hair);
      // console.log("length:"+objkeys.length);
      for(var i=0;i<tf_long.length;i++){
        priceLongArr.push(tf_price_long_hair[i]);
      }
      for(var i = 0; i<tf_short.length;i++){
        priceShortArr.push(tf_price_short_hair[i]);
      }

    wx.showModal({
      title: '提示',
      content: priceLongArr[index],
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },

  // 更新选中的page
  updateSelectedPage(page) {
    // 屏蔽重复选中
    if (this.data.activeTab == page) {
      return;
    }
    let { tabs, stv, activeTab } = this.data;
    activeTab = page;
    this.setData({ activeTab: activeTab })
    stv.offset = stv.windowWidth * activeTab;
    this.setData({ stv: this.data.stv })
    this.reloadPageIfEmpty(page);
  },

  reloadPageIfEmpty(page) {
    // 重新请求
    if (this.data.tabs[page].list.length <= 0) {
      this.loadCouponsAtIndexRefresh(page);
    }
  },

  // item view 点击
  handlerTabTap(e) {
    this.updateSelectedPage(e.currentTarget.dataset.index);
  },

  //预览图片
  viewTangfaBigimg:function(e){
      //console.log(e);
      var index = e.currentTarget.dataset.index;
      var imgArr = [];
      var objkeys = Object.keys(tangfa_img);
      // console.log("length:"+objkeys.length);
      for(var i=0;i<objkeys.length;i++){
        imgArr.push(tangfa_img[i]);
      }
      // console.log(imgArr)
      wx.previewImage({
      current: imgArr[index],//当前图片地址
      urls: imgArr
      })
    },
    viewZhifaBigimg:function(e){
      //console.log(e);
      var index = e.currentTarget.dataset.index;
      var imgArr = [];
      var objkeys = Object.keys(zhifa_img);
      // console.log("length:"+objkeys.length);
      for(var i=0;i<objkeys.length;i++){
        imgArr.push(zhifa_img[i]);
      }
      // console.log(imgArr)
      wx.previewImage({
      current: imgArr[index],//当前图片地址
      urls: imgArr
      })
    },
    viewSecaiBigimg:function(e){
      //console.log(e);
      var index = e.currentTarget.dataset.index;
      var imgArr = [];
      var objkeys = Object.keys(secai_img);
      // console.log("length:"+objkeys.length);
      for(var i=0;i<objkeys.length;i++){
        imgArr.push(secai_img[i]);
      }
      // console.log(imgArr)
      wx.previewImage({
      current: imgArr[index],//当前图片地址
      urls: imgArr
      })
    },
    viewDaomoBigimg:function(e){
      //console.log(e);
      var index = e.currentTarget.dataset.index;
      var imgArr = [];
      var objkeys = Object.keys(daomo_img);
      // console.log("length:"+objkeys.length);
      for(var i=0;i<objkeys.length;i++){
        imgArr.push(daomo_img[i]);
      }
      // console.log(imgArr)
      wx.previewImage({
      current: imgArr[index],//当前图片地址
      urls: imgArr
      })
    },
    viewBlackBigimg:function(e){
      //console.log(e);
      var index = e.currentTarget.dataset.index;
      var imgArr = [];
      var objkeys = Object.keys(black_img);
      // console.log("length:"+objkeys.length);
      for(var i=0;i<objkeys.length;i++){
        imgArr.push(black_img[i]);
      }
      // console.log(imgArr)
      wx.previewImage({
      current: imgArr[index],//当前图片地址
      urls: imgArr
      })
    },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: `准确极速、支持全国`,
      desc: '准确极速、覆盖全国、1.4亿车主都在用',
      path: '/pages/myCoupon/myCoupon'
    }
  },
})