// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import AmpUI from "../index"
import "element-ui/lib/theme-chalk/index.css";
import './assets/css/g-class.scss';
import './assets/css/el-cover.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' });
Vue.use(AmpUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
