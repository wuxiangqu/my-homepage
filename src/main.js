import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
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
  Checkbox,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
Vue.use(Checkbox)
Vue.component(Message.name, Message)

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
