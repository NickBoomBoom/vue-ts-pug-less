<template lang="pug">
  div#app
    router-view
</template>
<script lang="ts">
import { Component, Vue, Provide, Watch, Prop } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import api from "@/api";
import { platform, share } from "@/utils/share.js";
// import DEFAULT_AVATAR from "@/assets/img/default_avatar@3x.png";
@Component({})
class App extends Vue {
  @Mutation
  SET_DEVICE_TYPE!: (type: number) => void;
  created() {
    this.judgeDeviceType();
    this.initJsSdk();
    this.errorCatch();
  }

  destroyed() {
    document.removeEventListener("error", function() {}, true);
  }

  errorCatch() {
    document.addEventListener(
      "error",
      function(e) {
        const el: any = e.target;
        const type:string = el.getAttribute('data-type')
        console.error('监听到报错==>',type)
        const OO: object = {
          avatar: function(): void {
              // dosomething
              // el.src = DEFAULT_AVATAR;
          }
        };
        OO[type] && OO[type]();
      },
      true /*指定事件处理函数在捕获阶段执行*/
    );
  }

  // 检测设备类型
  judgeDeviceType(): void {
    const u = navigator.userAgent;
    const isIOSX =
      /iphone/gi.test(u) && (screen.height === 812 && screen.width === 375);
    const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    if (!(isIOSX && isAndroid && isIOS)) return;
    let type = 0;
    isIOS && (type = 1);
    isIOSX && (type = 3);
    isAndroid && (type = 2);
    this.SET_DEVICE_TYPE(type); // 0 未定义  1 ios  2 android  3 iosx
  }

  initJsSdk() {
    if (platform()) {
      let uri = encodeURIComponent(window.location.href.split('#')[0])
      api.getJsSdkConfig(uri).then(({ status, result }) => {
        if (status === "success") {
          window.wx.config({
            beta: true,
            debug: true,
            appId: result.appId,
            timestamp: result.timestamp,
            nonceStr: result.noncestr,
            signature: result.signature,
            jsApiList: [
              "onMenuShareTimeline",
              "onMenuShareAppMessage",
              "onMenuShareQQ",
              "onMenuShareWeibo",
              "onMenuShareQZone",
              "previewImage"
            ]
          });
          share({
            title: "测试分享",
            desc: " 分享成功",
            link: "https://www.baidu.com",
            imgUrl: "http://tupian.qqjay.com/u/2017/1201/2_161641_2.jpg"
          });
        } else {
          this.$toast(result.error_msg);
        }
      });
    }
  }
}

export default App;
</script>
<style>
html body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
div,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  padding: 0;
  margin: 0;
  border: none;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

img {
  overflow: hidden;
}

p {
  display: block;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

/* 取消链接高亮  */

a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
}

/* 设置HTML5元素为块 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

button {
  display: block;
  outline: none;
}
#app {
  font-size: 0.13rem;
  height: 100%;
}

/* 清除浮动 */
.clearfix {
  zoom: 1;
}

.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.text-line {
  overflow: hidden;
  /*文字超出用省略号*/
  text-overflow: ellipsis;
  /*盒子模型*/
  display: -webkit-box;
  /*显示的文本行数*/
  -webkit-line-clamp: 1;
  /*子元素的垂直排列方式*/
  -webkit-box-orient: vertical;
}

.text-line2 {
  overflow: hidden;
  /*文字超出用省略号*/
  text-overflow: ellipsis;
  /*盒子模型*/
  display: -webkit-box;
  /*显示的文本行数*/
  -webkit-line-clamp: 2;
  /*子元素的垂直排列方式*/
  -webkit-box-orient: vertical;
}

.chunk-10 {
  width: 100%;
  height: 0.1rem;
  background-color: #eff0f1;
}

.mt30 {
  margin-top: 0.3rem;
}
.mr8 {
  margin-right: 0.08rem;
}
.mr16 {
  margin-right: 0.16rem;
}
.mb30 {
  margin-bottom: 0.3rem;
}
</style>

