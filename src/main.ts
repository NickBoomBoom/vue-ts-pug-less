import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "./store";
import Component from "vue-class-component";
import { platform } from "@/utils/share";
import "@/utils/filter";
import "@/assets/less/index.less"
import 'vant/lib/index.css';

console.table(process.env);

// Register the router hooks with their names
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate" // for vue-router 2.2+
]);

// productionTip 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

//通过环境配置 performance是否可用 搭配 chrome 插件  vue performance 使用,查看性能
Vue.config.performance = process.env.NODE_ENV !== "production";

// 全局路由跳转监听
router.afterEach((to, from) => {
  // 微信签名
  if (platform()) {
    const url = window.location.origin + to.fullPath;
    const body = {
      debug: false,
      jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"]
    };
    // api.getJsSdkConfig(body)
    // .then((res: any) => {
    //   window.wx.config(res);
    //   window.wx.ready(function() {
    //     const link = window.location.origin + to.fullPath;
    //     const filterRouter = "topic"; // 该路由下 不需要重新设置分享内容
    //     if (!filterRouter.includes(to.name + "")) {
    //       setShare({ ...H5_SHARE.DEFULT, link });
    //     }
    //     setShareMoments({ ...H5_SHARE.MOMENTS, link });
    //   });
    // });
  }
});

router.beforeEach((to, from, next) => {
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
