import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBed, faChair, faComments } from '@fortawesome/free-solid-svg-icons'
library.add(faBed, faChair, faComments)

import './assets/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
