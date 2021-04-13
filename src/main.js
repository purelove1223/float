import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElmenetUI from 'element-ui'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElmenetUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

