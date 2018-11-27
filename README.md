# ky_app_h5 

	核心:  vue +  TS
        vue 的 ts 写法 可以在 http://localhost:8081/test  src/views/test  文件夹下查看
```
├── public
└── src
    ├── api  // api 文件夹
    ├── assets	// 静态资源文件夹
    │   ├── css
    │   ├── img
    │   └── js
    ├── components // 公共组件文件夹
    ├── config	// 基础配置
    ├── utils	// 基本工具函数
    └── views	// 视图层
        └── test	// ts 写法的栗子(组件传参, vuex 用法等等)

```



## USE

        安装依赖: yarn i
        开启测试环境: yarn run dev
        开启生产环境: yarn run prod
        生产打包: yarn run build
        测试打包: yarn run dev-build

## Tips

       .env*文件是环境配置文件 

	只有 VUE_APP* 开头的变量才能被正确识别,命名以此来.

	在 process.env中的 BASE_URL 是在 vue.config.js 中配置	