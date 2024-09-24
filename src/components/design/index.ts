import { defineAsyncComponent } from 'vue';

import LoadingScreen from './LoadingScreen.vue';

const Circles = defineAsyncComponent(() => import('./Circles.vue'));
const MyName = defineAsyncComponent(() => import('./MyName.vue'));
const Star = defineAsyncComponent(() => import('./Star.vue'));
const SamsungError = defineAsyncComponent(() => import('./SamsungError.vue'));
const Marquee = defineAsyncComponent(() => import('./Marquee.vue'));
const Slider = defineAsyncComponent(() => import('./Slider.vue'));
const Footer = defineAsyncComponent(() => import('./Footer.vue'));
const Cursor = defineAsyncComponent(() => import('./Cursor.vue'));

export {
  Circles,
  MyName,
  Star,
  LoadingScreen,
  SamsungError,
  Marquee,
  Slider,
  Footer,
  Cursor,
};
