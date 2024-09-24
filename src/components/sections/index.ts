import { defineAsyncComponent } from 'vue';

import Hero from './Hero.vue';

const Services = defineAsyncComponent(() => import('./Services.vue'));
const Works = defineAsyncComponent(() => import('./Works.vue'));
const aboutMe = defineAsyncComponent(() => import('./aboutMe.vue'));
const People = defineAsyncComponent(() => import('./People.vue'));
const Contact = defineAsyncComponent(() => import('./Contact.vue'));

export { Hero, Services, Works, aboutMe, People, Contact };
