/*
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-22 13:48:16
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\vue.config.js
 */
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const proxyTable= {
        
    // 匹配所有以 /api 开头的url
    '/ding': {
        // 请求的目标主机
        target: 'http://top.cloudwj.com/',
        changeOrigin: true,
    },
    '/meiling_wu': {
        // 请求的目标主机
        target: 'https://gitee.com/',
        changeOrigin: true,
    }
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    // vue项目启动时的ip地址和端口
    host: 'localhost',
    port: 8000,
    https: false,
    open:true,
    proxy: proxyTable
    },
    css: {
        // loaderOptions: {
        //     css: {},
        //     postcss: {
        //         plugins: [
        //             require('postcss-px2rem')({
        //                 remUnit:750
        //             })
        //         ]
        //     }
        // }
    },
}