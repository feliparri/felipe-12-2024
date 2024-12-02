import { createApp } from 'vue';
import App from '../src/App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './index.css';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
