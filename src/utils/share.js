function platform() {
  const ua = navigator.userAgent;
  const isWX = ua.match(/MicroMessenger\/([\d.]+)/)
  const isQQ = ua.match(/QQ\/([\d.]+)/)
  const isQZ = ua.indexOf("Qzone/") !== -1

  if (isWX || isQQ || isQZ) {
    return true
  }
  return false
}


/**
     * 设置分享
     * @param title 分享标题
     * @param desc 分享描述
     * @param link 分享链接
     * @param imgUrl 分享图标
     * @param type 分享类型,music、video或link，不填默认为link
     * @param dataUrl 如果type是music或video，则要提供数据链接，默认为空
     * @param success 用户确认分享后执行的回调函数
     * @param cancel 用户取消分享后执行的回调函数
     */
function share({ title, desc, link, imgUrl, type = 'link',  success = function(){alert('成功')}, cancel =function(){alert('失败')} }) {
  window.wx.onMenuShareTimeline({
    title: title,
    link: link,
    imgUrl: imgUrl,
    success: success,
    cancel: cancel,
  });
  window.wx.onMenuShareAppMessage({
    title: title,
    desc: desc,
    link: link,
    imgUrl: imgUrl,
    type: type,
    success: success,
    cancel: cancel,
  });
  window.wx.onMenuShareQQ({
    title: title,
    desc: desc,
    link: link,
    imgUrl: imgUrl,
    success: success,
    cancel: cancel,
  });
  window.wx.onMenuShareWeibo({
    title: title,
    desc: desc,
    link: link,
    imgUrl: imgUrl,
    success: success,
    cancel: cancel,
  });
  window.wx.onMenuShareQZone({
    title: title,
    desc: desc,
    link: link,
    imgUrl: imgUrl,
    success: success,
    cancel: cancel,
  });
}
export {
  platform,
  share
}