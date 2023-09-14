import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'


//animate.css
import 'animate.css'
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

//pinia以及持久化插件
const pinia = createPinia()
pinia.use(piniaPersist)


app.use(pinia)
app.use(router)

app.mount('#app')
