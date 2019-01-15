function platform(): boolean {
  const ua = navigator.userAgent;
  const isWX = ua.match(/MicroMessenger\/([\d.]+)/);
  const isQQ = ua.match(/QQ\/([\d.]+)/);
  const isQZ = ua.indexOf("Qzone/") !== -1;
  if (isWX || isQQ || isQZ) {
    return true;
  }
  return false;
}

function isWX(): boolean {
  const ua = navigator.userAgent;
  const iswx = ua.match(/MicroMessenger\/([\d.]+)/);
  return !!iswx;
}

function isIOS(): boolean {
  const u = navigator.userAgent;
  // const isIOSX =/iphone/gi.test(u) && (screen.height === 812 && screen.width === 375); // IOSX 终端
  // const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  return isIOS;
}

/*
 * 设置分享  对标 wx-sdk 的1.4版本
 */
function share(
  data: any = {
    title: "测试分享标题", // 分享标题
    desc: "测试分享描述内容:哈哈哈哈哈哈哈哈哈哈哈哈", // 分享描述
    link: "https://www.baidu.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: "", // 分享图标
    success: function() {
      // 设置成功
    }
  }
) {
  console.log(data);
  // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
  window.wx.updateAppMessageShareData(data);
  // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
  window.wx.updateTimelineShareData(data);
}

export { platform, share, isWX, isIOS };
