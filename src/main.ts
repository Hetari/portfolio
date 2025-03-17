import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import Lenis from 'lenis';

// smooth scroll
const lenis = new Lenis({
  duration: 0.8,
});
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

const app = createApp(App);
app.mount('#app');

export { raf, lenis };
