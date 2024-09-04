import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import Lenis from 'lenis';

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
    ar: {
      common: {
        alhetari: 'الهتاري',
        brhoom: 'برهوم',
        ebraheem: 'إبراهيم',
        hetari: 'هتاري',
      },
    },
    en: {
      common: {
        alhetari: 'Al-Hetari',
        brhoom: 'brhoom',
        ebraheem: 'Ebraheem',
        hetari: 'Hetari',
      },
    },
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');

export { raf, lenis, i18n };
