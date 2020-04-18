import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then(res =>{
  console.log(res);
})
axios.get('http://123.207.32.32:8000/home/data?type=sell&page=1')
    .then(res =>{
      console.log(res);
    })