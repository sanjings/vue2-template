# 基于VUE2.6的单页面项目模板
**最近公司以vue单页面为技术栈的新项目较多，因此搭建一个通用模板方便快速搭建新项目。**

## 项目依赖
vue@2.6.11  
vue-router@3.2.0  
vuex@3.4.0  
vue-cli@4.5.3  
axios@0.19.2  
qs@6.9.2  
dayjs@1.8.33  
node-sass@4.12.0  
sass-loader@8.0.2  
image-webpack-loader@6.0.0  
terser-webpack-plugin@2.2.0

## 安装依赖
```
yarn install or npm install
```
**如果没有安装yarn可以使用cnpm**

```
npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm install
```
### 本地运行
```
yarn serve or npm run serve
```
### 测试环境打包
```
yarn test or npm run test
```
### 生产环境打包
```
yarn build or npm run build
```
**如需更多环境的，直接在根目录下配置.env.XXX(环境名称)，然后在package.json的scripts中配置即可**

### 项目架构
```
├─node_modules 依赖包管理
├─public 静态文件
│  ├─index.html 单页面入口文件 
├─src 开发目录
│  ├─apis ajax请求管理
│  │  ├─url.js 接口统一管理   
│  │  ├─common.js 公共请求   
│  │  ├─oss.js oss阿里云api请求 
│  ├─assets 静态资源目录 
│  │  ├─fonts 字体  
│  │  ├─images 图片  
│  │  ├─styles css  
│  ├─components 公共组件目
│  ├─filters 过滤器
│  ├─layouts 布局组件
│  ├─mock mock数据
│  ├─main.js 入口文件
│  ├─pages 页面组件 
│  │  ├─index.vue 页面组件根组件
│  ├─plugins 插件管理 
│  ├─router 路由目录 
│  │  ├─index.js 路由配置入口文件
│  ├─service axios封装
│  │  ├─index.js axios实例   
│  │  ├─config.js 配置
│  ├─store vuex 
│  │  ├─index.js 入口文件
│  │  ├─stats.js
│  │  ├─getters.js
│  │  ├─mutations.js
│  │  ├─mutationTypes.js
│  │  ├─actions.js
│  ├─utils 工具方法目录
│  │  ├─tools.js 工具方法集合  
│  │  ├─cookie.js cookie增删改查方法   
│  ├─app.vue 根组件
│  ├─main.js 项目入口文件
├─.env.development 开发环境模式和变量配置
├─.env.production 正式环境模式和变量配置
├─.env.test 测试环境模式和变量配置
├─.eslintrc.js ESLint配置
├─babel.config.js babel配置
├─package.json npm包版本
├─yarn-lock.js npm包锁定版本
├─vue.config.js webpack配置
    
```

### 开发规范

1.组件分为页面组件、通用组件、模块组件，均用大驼峰(CamelCase)的方式命名文件夹，然后入口组件用index.vue命名；  
2.通用组件放在src/components里，页面组件放在src/pages里，页面组件的模块组件在该页面组件文件夹下新建文件夹，一个组件放一个文件夹；  
3.过滤器放在src/filters里，index.js存放全局过滤方法，组件单独过滤器按页面分类，建立对应命名的js文件单独引入组件内；  
4.vuex按照页面分类modules，通用状态在src/store根目录下面；建立mutationTypes.js管理type，type用大写字母加下划线分割命名；  
5.所有的ajax请求，都在src/apis里统一管理，接口地址在url.js里面统一管理；  
6.src/plugins用于管理项目插件，如Element-UI按需引入；  
7.src/layouts存放布局组件；  
8.src/utils文件夹用于抽离方法，tools.js存放工具方法；  
9.src/assets用于存放静态资源，styles里的common.scss是全局样式，variables是scss全局变量，已在vue.config.js里面配置好，无需组件单独引入；  
10.配置了路径别名、图片压缩、生产环境删除console.log等，在vue.config.js

### 最后
项目架构是我个人的开发习惯，仅供参考，喜欢就点个⭐吧，谢谢支持

