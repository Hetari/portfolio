import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import { createHead } from '@vueuse/head';

const app = createApp(App);
// app.use(createHead());
app.mount('#app');
// smooth scroll
import Lenis from 'lenis';

const lenis = new Lenis();
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

export { raf, lenis };
