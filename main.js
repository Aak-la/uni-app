import App from './App'
import module from './ajax/api/index.js'
Vue.prototype.$http = module;
import userRuleMixin from './common/rulesMixin.js'
import store from "./store/index"
import commonMixin from "./common/commonMixin.js"
Vue.use(userRuleMixin)
Vue.use(commonMixin)

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif