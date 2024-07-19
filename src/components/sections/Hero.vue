<template>
  <section id="hero" class="padding-x mb-[-100svh] py-0">
    <div
      class="sticky top-0 flex h-dvh w-full flex-col items-end justify-end pb-10 md:pb-[3%] 3xl:pb-[5%]"
    >
      <svg
        viewBox="0 0 1186 1186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pointer-events-none absolute left-1/2 top-1/2 block h-full w-5/6 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 md:hidden"
      >
        <circle
          cx="593"
          cy="593"
          r="593"
          fill="url(#paint0_linear_4949_267)"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_4949_267"
            x1="593"
            y1="0"
            x2="593"
            y2="1186"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DDDDD5"></stop>
            <stop offset="1" stop-color="#DDDDD5" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>

      <!-- ! hero-container -->
      <!-- <div class="w-full items-end"> -->

      <div class="w-full items-end overflow-clip">
        <div id="my-name" class="flex w-full translate-y-full items-start">
          <MyName />
          <Star class="hide-on-mobile" />
        </div>
      </div>

      <div
        class="column-gap spacing-t flex w-full grid-cols-12 flex-col md:grid"
      >
        <div
          id="profile-container"
          class="group relative z-10 col-span-3 hidden aspect-[3/3.5] size-full origin-top select-none flex-col rounded-lg md:flex"
        >
          <div class="overlay absolute inset-0 z-[2] bg-flax-smoke-100"></div>
          <img
            id="profile-img"
            :src="profile"
            alt="Ebrahhem profile"
            decoding="async"
            class="block size-full scale-90 rounded-lg object-cover object-bottom brightness-110 grayscale"
          />
        </div>

        <div
          class="col-span-8 col-start-5 flex flex-col justify-between gap-y-12 sm:gap-y-6 lg:gap-y-24"
        >
          <div class="column-gap flex items-start justify-between">
            <ModernArtShape
              id="art"
              class="w-16 flex-shrink-0 scale-0 opacity-0 sm:block sm:w-20 md:w-32 xl:w-40 2xl:w-56 3xl:w-60"
            />

            <p class="sr-only">
              A freelance full-stack developer, cutting-edge technologies to
              deliver comprehensive solutions for your business.
            </p>

            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i text-fluid-body max-w-[30ch] overflow-clip text-balance font-medium leading-snug lg:text-start"
            ></p>
          </div>

          <div
            id="location"
            class="column-gap flex scale-0 items-start justify-between text-flax-smoke-950 opacity-0"
          >
            <div class="text-sm font-normal">
              <p class="font-fancy">{{ locationPlace }}</p>
              <p class="font-fancy">{{ locationCountry }}</p>
            </div>
            <p class="animate-pulse font-fancy text-sm">
              SCROLL FOR MORE
              <span
                class="inline-block font-fancy motion-safe:animate-[bounce_2s_infinite]"
                >↓</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { MyName, Star, ModernArtShape } from '../design';
  import { profile } from '@/assets/images';
  import { heroText, locationCountry, locationPlace } from '@/data';
  import { textSplitter } from '@/functions';

  const whoAmI = ref(heroText);

  onBeforeMount(() => {
    whoAmI.value = textSplitter(whoAmI.value);
  });

  onMounted(() => {});
</script>

<style scoped>
  .column-gap {
    column-gap: 2.5rem;
  }

  .text-fluid-body {
    font-size: clamp(1rem, 0.8571rem + 1.4143vi, 2.5rem);
  }
</style>
