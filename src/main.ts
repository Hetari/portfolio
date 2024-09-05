import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import Lenis from 'lenis';
import ar from './languages/ar';
import en from './languages/en';

// smooth scroll
const lenis = new Lenis();
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ar: ar,
    en: en,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');

export { raf, lenis, i18n };
