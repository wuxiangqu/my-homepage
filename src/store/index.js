import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    color: ['#3969cb', '#da381f', '#ff9726', '#1b9622', '#97139a', '#e91e63', '#00bcd4', '#C98769']
  }
})
export default store
