import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createHead } from '@vueuse/head';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);
app.use(createHead());
app.use(MotionPlugin);
app.mount('#app');
