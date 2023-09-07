import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

//集成unocss
import '@unocss/reset/tailwind.css'
import '@/assets/css/style.css'
import 'uno.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
//注册图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//axios请求
axios.defaults.baseURL = 'http://1.116.150.155:11451'

app.use(createPinia())
app.use(router)

app.mount('#app')
