// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
///import ElementUI from 'element-ui'
import {
  Form,
  FormItem,
  Input,
  Menu,
  Submenu,
  MenuItem,
  Table,
  TableColumn,
  Button,
  Slider,
  ColorPicker,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import axios from 'axios'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Slider)
Vue.use(ColorPicker)
//Vue.use(Message)
Vue.component(Message.name, Message)

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$message = Message
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
