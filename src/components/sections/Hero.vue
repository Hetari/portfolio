<template>
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

    <div
      id="hero-container"
      class="absolute bottom-10 w-full items-end md:bottom-5 lg:bottom-20"
    >
      <!-- <h1
        class="only-on-mobile absolute -top-full text-[calc((50vw)_/_24_*_1.9)] font-bold leading-[0.8] tracking-[-0.1em] opacity-70"
      >
        CREATIVE <br />
        DEVELOPER
        <Star class="size-[calc((20vw)_/_24_*_1.9)]" />
      </h1> -->

      <div class="overflow-clip">
        <div id="my-name" class="flex w-full translate-y-full items-start">
          <MyName />
          <Star class="hide-on-mobile" />
        </div>
      </div>

      <div class="column-gap spacing-t flex grid-cols-12 md:grid">
        <div
          id="profile-container"
          class="group relative col-span-3 hidden aspect-[3/3.5] size-full origin-top select-none rounded-lg md:block"
        >
          <div class="overlay absolute inset-0 z-[2] bg-primary"></div>
          <img
            id="profile-img"
            :src="profile"
            alt="Ebrahhem profile"
            decoding="async"
            class="block size-full scale-90 rounded-lg object-cover object-center"
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
              class="who-am-i text-fluid-body max-w-[33ch] overflow-clip text-balance text-start font-medium leading-snug text-primary-dark"
            ></p>
          </div>

          <div
            id="location"
            class="column-gap flex scale-0 items-start justify-between opacity-0"
          >
            <div class="text-sm font-normal">
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

  const whoAmI = ref(
    'A freelance full-stack developer, making good shit since 2023, hiding bad shit since 2023.',
  );

  onBeforeMount(() => {
    const words = whoAmI.value.split(' ');
    const char = words.map((word) => word.split(''));

    let result = '';
    char.forEach((word) => {
      result += '<span class="inline-block overflow-clip">';
      word.forEach((char) => {
        result += `<span class="letters translate-y-full inline-block ">${char}</span>`;
      });
      result += '</span> ';
    });

    whoAmI.value = result;
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
