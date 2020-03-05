import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import "@/mock"

Vue.config.productionTip = false;

(async function () {
    const body = await axios({
        url:"/api/ratings"
    })
    console.log(body);
})()

new Vue({
  render: h => h(App),
}).$mount('#app')
