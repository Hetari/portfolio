<template>
  <footer
    class="relative flex flex-col items-center justify-center gap-20 p-[2%]"
  >
    <div
      class="row-gap grid w-full grid-cols-2 text-base sm:gap-x-6 md:grid-cols-12"
    >
      <div class="flex flex-col md:col-span-6">
        <p
          class="heading-5 w-full border-b border-flax-smoke-400 pb-2 font-bold"
        >
          Menu
        </p>
        <div class="mt-2 space-y-1">
          <p v-for="i in navbarLinks" class="heading-6">
            <Link
              class="h-6 font-medium lowercase tracking-wider"
              :label="i.label"
              :url="i.url"
            />
          </p>
        </div>
      </div>

      <div class="flex flex-col md:col-span-3">
        <p
          class="heading-5 w-full border-b border-flax-smoke-400 pb-2 font-bold"
        >
          Socials
        </p>

        <div class="mt-2 space-y-1">
          <p v-for="i in socialLinks" :key="i.label" class="heading-6">
            <Link
              class="h-6 font-medium lowercase tracking-wider"
              :label="i.label"
              :url="i.url"
            />
          </p>
        </div>
      </div>

      <div class="col-span-full flex flex-col md:col-span-3">
        <p
          class="heading-5 w-full border-b border-flax-smoke-400 pb-2 font-bold"
        >
          Resources
        </p>
        <div class="mt-2 space-y-1">
          <p v-for="i in resourceLinks" class="heading-6">
            <Link
              class="font-medium lowercase tracking-wider"
              :label="i.label"
              :url="i.url"
            />
          </p>
        </div>
      </div>
    </div>

    <div class="grid w-full grid-cols-12">
      <div class="col-span-7 place-content-center md:col-span-6">
        <h1 class="heading-4 sm:heading-2 font-bold leading-none">
          © {{ new Date().getFullYear() }} Hetari <br />
          All rights reserved.
        </h1>
      </div>

      <div class="col-span-5 place-content-center max-sm:place-content-end">
        <p class="heading-6 font-bold uppercase">My Local time</p>
        <p class="heading-6">{{ myLocalTime }}</p>
        <p class="heading-6 font-bold uppercase">Your Local time</p>
        <p class="heading-6">{{ userLocalTime }}</p>
      </div>

      <div
        class="hidden md:col-span-2 md:col-start-11 md:block lg:col-span-1 lg:col-start-12"
      >
        <MagneticEffect divId="scroll-to-top" textId="scroll-to-top-icon">
          <div
            @click="lenis.scrollTo('#app', { duration: 2 })"
            id="scroll-to-top"
            class="flex-center size-20 cursor-pointer flex-col rounded-full bg-flax-smoke-400"
          >
            <svg
              class="size-1/2"
              id="scroll-to-top-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M12 4L12 20"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </MagneticEffect>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { navbarLinks, resourceLinks, socialLinks } from '@/data';
  import { Link } from '..';
  import { onMounted, ref } from 'vue';
  import { lenis } from '@/main';
  import MagneticEffect from '../MagneticEffect.vue';
  import moment from 'moment-timezone';

  const myLocalTime = ref('');
  const userLocalTime = ref('');

  onMounted(() => {
    // Yemen Time (local to you)
    myLocalTime.value = moment.tz('Asia/Aden').format('h:mm:ss a');
    setInterval(() => {
      myLocalTime.value = moment.tz('Asia/Aden').format('h:mm:ss a');
    }, 1000);

    // User's local time (based on their location)
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    userLocalTime.value = moment.tz(userTimeZone).format('h:mm:ss a');
    setInterval(() => {
      userLocalTime.value = moment.tz(userTimeZone).format('h:mm:ss a');
    }, 1000);
  });
</script>
