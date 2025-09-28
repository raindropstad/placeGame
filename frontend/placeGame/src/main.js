import { createApp } from 'vue'
import App from './App.vue'

// 检查 NW.js 环境
if (typeof nw !== 'undefined') {
  console.log('运行在 NW.js 环境中');
}

createApp(App).mount('#app');