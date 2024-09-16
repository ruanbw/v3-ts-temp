import { createApp } from 'vue'
import App from './App.vue'

import './assets/index.css'
import './styles/index.scss'
import 'ant-design-vue/dist/reset.css'

import router from '@/router'

createApp(App).use(router).mount('#app')
