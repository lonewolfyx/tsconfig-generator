import {createApp} from 'vue'
import ArcoVue from '@arco-design/web-vue';
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from './locale';
import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/tailwind.css'
import '@/assets/reset.css'
import '@/assets/main.scss'

const app = createApp(App)


const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(router);
app.use(ArcoVue);
app.use(i18n);

document.documentElement.classList.add('dark')
document.body.setAttribute('arco-theme', 'dark')

app.mount('#root')
