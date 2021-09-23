# 基于VUE2.6.11的单页面项目模板

### 技术栈  
- **[vue v2.6.11](https://github.com/vuejs/vue):**  vue全家桶
- **[qs](https://github.com/ljharb/qs):**  序列化字符串的库
- **[axios](https://github.com/axios/axios):**  基于promise的HTTP库
- **[dayjs](https://github.com/iamkun/dayjs):** 完美替代momentjs的轻量级时间处理库 

### 项目架构
```
├─public 静态文件
│  ├─index.html 单页面入口文件 
├─src 开发目录
│  ├─apis ajax请求管理
│  │  ├─config.js axios配置   
│  │  ├─data.js 静态数据   
│  │  ├─axios.js axios封装   
│  │  ├─url.js 接口统一管理   
│  │  ├─requests 网络请求合集   
│  ├─assets 静态资源目录 
│  │  ├─fonts 字体  
│  │  ├─images 图片  
│  │  ├─styles css  
│  │  ├─scripts 公用脚本  
│  ├─components 公共组件
│  ├─layouts 布局组件
│  ├─mock mock数据
│  ├─main.js 入口文件
│  ├─pages 页面组件 
│  │  ├─store 页面组件独立vuex
│  ├─plugins 插件管理 
│  ├─router 路由目录 
│  │  ├─index.js 路由配置入口文件
│  ├─store vuex管理 
│  │  ├─index.js 入口文件
│  │  ├─state.js
│  │  ├─getters.js
│  │  ├─mutations.js
│  │  ├─actionTypes.js
│  │  ├─actions.js
│  ├─utils 工具方法目录
│  │  ├─tools.js 工具方法  
│  │  ├─filters.js 全局过滤器 
│  │  ├─cookie.js cookie增删改查方法   
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

### 开发规范
1. 所有组件的文件夹命名用大驼峰，文件命名用小驼峰，出口文件使用index命名；
2. 插件命名使用大驼峰，其他所有文件和文件夹均使用小驼峰；
3. 样式使用scss来编写，所有的css类名全部小写，并用-连接，定义scss变量，并配置webpack全局注入；
4. 在vue.config.js中，配置了路径别名、图片压缩、生产环境删除console.log等；
5. 网络请求相关封装和api接口管理、数据处理都在apis文件夹中；
6. 工具方法统一放在utils文件夹中，再分类管理；
7. 插件统一放在plugins文件夹中；
8. 页面组件和业务模块组件统一放在pages文件夹中，页面组件作为容器组件，用于处理数据、逻辑和布局，业务模块组件是对应页面的UI组件，只负责UI不负责逻辑；
9. 通用组件和其它UI组件统一放在components中； 
10. 组件内部书写顺序：
     - template
     - js
        - name
        - components
        - data
        - computed
        - 生命周期函数
        - methods
        - filters
        - watch
     - css
11. vuex规范：
    - 每个页面模块有自己独立的vuex模块，在store文件夹中模块化管理
    - state、mutations、getters、actions分离，在index中导入
    - 事件类型，在actionTypes中管理

### 项目运行
#### clone项目
```
git clone https://github.com/sanjings/vue2-spa-template.git
```
#### 安装依赖（如果没有yarn推荐使用cnpm）
```
cd vue2-spa-template
npm install cnpm -g --registry=https://registry.npm.taobao.org
yarn install or cnpm install
```

#### 本地运行
```
yarn serve or npm run serve
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

