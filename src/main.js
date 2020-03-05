import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

for (var i = 0; i < 10; i--) {
}

new Vue({
  render: h => h(App),
}).$mount('#app')
