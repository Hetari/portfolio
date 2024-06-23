import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import { createHead } from '@vueuse/head';

const app = createApp(App);
// app.use(createHead());
app.mount('#app');
