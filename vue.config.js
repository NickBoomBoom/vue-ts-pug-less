// vue.config.js
module.exports = {
  // 选项...
  devServer: {
    port: "8088",
    proxy: {
      // ? 本地跨域问题解决
      // "/api": {
      // target: "http://swoft-test.test.cc:11000",
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "/api": "" // rewrite path
      //   },
      //   onProxyReq: (proxyReq, req, res) => {
      //     const date = new Date().toUTCString();
      //     const username = "zzy";
      //     const secret = "LLvOnhnJkbArBApb";
      //     const sign = _sign(date, secret, proxyReq.method, proxyReq.path);
      //     const Authorization = `hmac username="${username}",algorithm="hmac-sha256",headers="x-date request-line",signature="${sign}"`;
      //     proxyReq.setHeader("X-Date", date);
      //     proxyReq.setHeader("Authorization", Authorization);
      //   }
      // },
      // "/wechat": {
      //   target: "http://swoft-test.test.cc:11623",
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "/wechat": "/wechat" // rewrite path
      //   }
      // }
    }
  },
  configureWebpack: {
    optimization: {
      // ?提取公共模块，webpack4去除了CommonsChunkPlugin，使用SplitChunksPlugin作为替代
      //主要用于多页面
      //例子代码 https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk
      //SplitChunksPlugin配置，其中缓存组概念目前不是很清楚
      // splitChunks: {
      //   // 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
      //   chunks: "all",
      //   // 表示在压缩前的最小模块大小，默认为0；
      //   minSize: 30000,
      //   //表示被引用次数，默认为1
      //   minChunks: 1,
      //   //最大的按需(异步)加载次数，默认为1；
      //   maxAsyncRequests: 3,
      //   //最大的初始化加载次数，默认为1；
      //   maxInitialRequests: 3,
      //   // 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；设置ture则使用默认值
      //   name: false,
      //   //缓存组，目前在项目中设置cacheGroup可以抽取公共模块，不设置则不会抽取
      //   cacheGroups: {
      //     //设置多个缓存规则
      //     commons: {
      //       test: /[\\/]node_modules[\\/](vue|vuex|vue-router|vue-lazyload|vue-class-component|vue-property-decorator|mint-ui|axios|js-cookie)[\\/]/,
      //       chunks: "all",
      //       name: "commons",
      //       //表示缓存的优先级
      //       priority: 10,
      //       enforce: true
      //     }
      //   }
      // }
    }
  }
};
