const path = require('path');
const terserWebpackPlugin = require('terser-webpack-plugin')

const IS_PRODUCTION = ['production', 'prod'].includes(process.env.NODE_ENV)

const resolve = dir => path.join(__dirname, dir);

module.exports = {
   publicPath: process.env.VUE_APP_PUBLIC_PATH,
   outputDir:'dist', // 生产环境下的打包路径
   assetsDir: 'static', // 静态资源打包目录
   filenameHashing: true, // 生产环境下的打包文件的哈希后缀，默认true
   lintOnSave: true, // 保存时lint代码
   productionSourceMap: false, // 关闭生产环境的source map，加快打包速度
   chainWebpack: config => {
      // 压缩图片
      config.module
         .rule('images')
         .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
         .use('image-webpack-loader')
         .loader('image-webpack-loader')
         .options({ bypassOnDebug: true })
         .end();
      // 添加别名 
      config.resolve.alias
         .set('@', resolve('src'))
         .set('assets', resolve('src/assets'))
         .set('components', resolve('src/components'))
         .set('pages', resolve('src/pages'))
         .set('utils', resolve('src/utils'));
   },
   configureWebpack: config => {
      if (IS_PRODUCTION) {
         // 代码压缩
         config.plugins.push(
            new terserWebpackPlugin({
               terserOptions: {
                  // 删除console
                  compress: {
                     drop_debugger: true,
                     drop_console: true,
                     pure_funcs: ['console.log']
                  }
               },
               cache: true,
               sourceMap: false,
               parallel: true
            })
         )
      }
   },
   css:{
      sourceMap: false, // 关闭source map
      loaderOptions: {
         scss: {
            prependData: `
            @import "assets/styles/variables.scss";
            `
         }
      }
   },
   devServer: {
      port: 3030, // 本地服务器端口号
      open: true, // 编译后自动打开浏览器
      hotOnly: true // 开启热更新
   }
}