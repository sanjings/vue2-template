# 基于Vue2+ElementUi的单页面项目模板

### 技术栈  
- **[vue v2](https://github.com/vuejs/vue):**  vue全家桶
- **[axios](https://github.com/axios/axios):**  基于promise的HTTP库
- **[dayjs](https://github.com/iamkun/dayjs):** 完美替代momentjs的轻量级时间处理库
- **[element-ui](https://github.com/ElemeFE/element):** 基于Vue2的桌面端组件库

### 项目架构
```
├─public 静态文件
│  ├─index.html 单页面入口文件 
├─src 开发目录
│  ├─requests ajax请求管理  
│  ├─configs 配置项 
│  ├─assets 静态资源目录 
│  ├─components 公共组件
│  ├─layouts 布局组件
│  ├─main.js 入口文件
│  ├─pages 页面组件 
│  ├─plugins 插件管理 
│  ├─router 路由目录 
│  ├─store vuex管理 
│  │  ├─index.js 入口文件
│  │  ├─state.js
│  │  ├─getters.js
│  │  ├─mutations.js
│  │  ├─actionTypes.js
│  │  ├─actions.js
│  ├─utils 工具方法目录
│  ├─filters 过滤器
│  ├─app.vue 根组件
│  ├─main.js 项目入口文件
├─.env.development 开发环境模式和变量配置
├─.env.production 正式环境模式和变量配置
├─.env.test 测试环境模式和变量配置
├─.eslintrc.js ESLint配置
├─babel.config.js babel配置
├─package.json npm包版本
├─vue.config.js webpack配置
    
```

### 项目运行
#### clone项目
```
git clone https://github.com/sanjings/vue2-spa-template.git
```
#### 安装依赖（推荐使用pnpm）
```
npm i pnpm -g
cd vue2-spa-template
pnpm install
```

#### 本地运行测试环境
```
yarn dev or npm run dev
```
#### 本地运行生产环境
```
yarn dev:prod or npm run dev:prod
```
#### 测试环境打包
```
yarn test or npm run test
```
#### 生产环境打包
```
yarn build or npm run build
```
**如需更多环境的，直接在根目录下配置.env.XXX(环境名称)，然后在package.json的scripts中配置即可**

### 最后
项目架构是我个人的开发习惯，仅供参考，喜欢就赏个⭐吧，谢谢支持

