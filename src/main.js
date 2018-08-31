import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import locale from 'element-ui/lib/locale/lang/en'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(ElementUI, {locale})
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
Vue.http.options.root = 'root'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
