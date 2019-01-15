# vue-ts-pug-less

	核心:  vue +  TS
	      具体实例 可在 views/test 下查看vue 的 ts 写法
```
├── public
└── src
    ├── api  // api 文件夹
    ├── assets	// 静态资源文件夹
    │   ├── less
    │   ├── img
    │   └── ts
    ├── components // 公共组件文件夹
    ├── utils	// 基本工具函数
    └── views	// 视图层
        └── test	// ts 写法的栗子(组件传参, vuex 用法等等)

```



## USE

        安装依赖: yarn i
        开启测试环境: yarn run dev
        开启生产环境: yarn run prod
        生产打包: yarn run build
        测试打包: yarn run build:test



## Tips 更多细节在 views/test 中代码具体表现

    1. .env*文件是环境配置文件 
    
    2. 只有 VUE_APP* 开头的变量才能被正确识别,命名以此来.
       在 process.env中的 BASE_URL 是在 vue.config.js 中配置	
    
    3. 目前在所有的 ts 文件中 import .vue 文件均会报错 can`t find. 
       IDE 报错, 不关注, 忽略
     
    4. 目前import 图片文件时会报错, can`t find .
       暂未解决, 替代方案: require(url)
       
    5. webpack 会将10kb 以下的图片自动转为 base64, 所以在 dist 文件中有部分缺失的 img, 不用关注

    6. vue cli3.0  中默认开启 autoprefixer,今天开始无需关注兼容写法,更注重于业务逻辑代码. 等出问题在看 css 兼容.

    7. vue build 的prod打包是会压缩代码的. test 打包不压缩,文件过大,加载会很长.但不用关注.

    8. css 样式污染不完全解决方案: 使用 less scoped, 每个组件外层添加 root 根元素标记, 以此来避免样式污染.(css MODULES 方案暂不考虑,相对而言,繁琐且不好定位样式)