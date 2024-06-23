<template>
  <!-- <h1
    class="opacity-70 text-[calc((50vw)_/_24_*_1.9)] font-bold tracking-[-0.1em] leading-[0.8]">
    CREATIVE <br />
    DEVELOPER
    <Star class="size-[calc((20vw)_/_24_*_1.9)]" />
  </h1> -->
  <!-- ! lg:h-[75vh] -->
  <section id="hero" class="relative h-dvh w-full">
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

    <div class="absolute bottom-10 w-full items-end md:bottom-5 lg:bottom-20">
      <!-- TODO: translate-y-[100%] -->
      <div class="flex w-full items-start">
        <MyName />
        <Star class="hide-on-mobile" />
      </div>

      <div class="column-gap spacing-t flex grid-cols-12 md:grid">
        <div
          id="profile-container"
          class="group relative col-span-3 hidden aspect-[3/3.5] size-full select-none overflow-clip rounded-lg shadow-2xl md:block"
        >
          <img
            id="profile-img"
            :src="profile"
            alt="Ebrahhem profile"
            decoding="async"
            class="size-full -scale-x-100 rounded-lg object-cover object-center transition-transform duration-300 group-hover:-scale-x-105 group-hover:scale-y-105"
          />
        </div>

        <div
          class="col-span-8 col-start-5 flex flex-col justify-between gap-y-12 sm:gap-y-6 lg:gap-y-24"
        >
          <div class="column-gap flex items-start justify-between">
            <ModernArtShape
              class="w-16 flex-shrink-0 sm:block sm:w-20 md:w-32 xl:w-40 2xl:w-56 3xl:w-60"
            />

            <p class="sr-only">
              A freelance full-stack developer, cutting-edge technologies to
              deliver comprehensive solutions for your business.
            </p>
            <p
              v-html="howAmI"
              class="how-am-i text-fluid-body max-w-[33ch] text-balance text-start font-medium leading-snug text-primary-dark"
            ></p>
          </div>

          <div class="column-gap flex items-start justify-between">
            <div id="location-container" class="text-sm font-normal">
              <p>15°22'22.0"N 44°10'39.5"E</p>
              <p>Yemen, Sanaa</p>
            </div>
            <p class="animate-pulse text-sm">
              SCROLL FOR MORE
              <span
                class="inline-block motion-safe:animate-[bounce_2s_infinite]"
                >↓</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { MyName, Star, ModernArtShape } from '../design';
  import { profile } from '@/assets/images';

  const howAmI = ref(
    'A freelance full-stack developer, making good shit since 2023, hiding bad shit since 2023.',
  );

  onBeforeMount(() => {
    const words = howAmI.value.split(' ');
    howAmI.value = words
      .map((word) => `<span class="inline-block ">${word}</span> `)
      .join('');
  });
</script>

<style scoped>
  .column-gap {
    column-gap: 2.5rem;
  }

  .text-fluid-body {
    font-size: clamp(1rem, 0.8571rem + 1.4143vi, 2.5rem);
  }
</style>
