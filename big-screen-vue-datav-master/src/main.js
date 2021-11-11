import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

//引入echart
//4.x 引用方式
import echarts from 'echarts'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;

// 全局注册
Vue.component('icon', Icon);
Vue.use(dataV);
import Axios from 'axios'
//import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)
// Axios.defaults.baseURL = 'ding'

//把方法放到vue的原型上，这样就可以全局使用了
// Vue.prototype.$http = axios.create({
//   //设置20秒超时时间
//   timeout: 20000,
//   baseURL: 'http://top.cloudwj.com//', //这里写后端地址
// });
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
