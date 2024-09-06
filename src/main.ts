import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Lenis from 'lenis';

// smooth scroll
const lenis = new Lenis();
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

const app = createApp(App);
app.mount('#app');

export { raf, lenis };
