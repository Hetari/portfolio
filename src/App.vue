<template>
  <LoadingScreen v-cloak="true" />

  <template v-if="samsungDarkModeError">
    <SamsungError />
  </template>
  <template v-else>
    <div class="pointer-events-none fixed inset-0 z-50">
      <!-- <svg
      class="h-[150vh] w-full object-cover object-center"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect ref="noise" class="size-full" filter="url(#noise)" opacity="0.15" />
    </svg> -->
    </div>

    <!-- ! h-[80vh] xl:h-[78vh] 3xl:h-[75vh] -->
    <Navbar @isLocked="LockeScroll" />

    <!-- max-w-9xl mx-auto -->
    <main class="relative h-full">
      <Hero />
      <div
        class="padding-x relative rounded-t-3xl bg-[#0B0B0A] py-[5%] text-flax-smoke-200"
      >
        <Services />
        <!-- <Works /> -->
      </div>
      <div class="relative overflow-y-clip">
        <aboutMe />
      </div>
    </main>
    <div class="h-screen"></div>
  </template>
</template>

<script setup lang="ts">
  import { usePreferredDark, useColorMode } from '@vueuse/core';

  import { Hero, Services, aboutMe } from '@/components/sections';
  import { onMounted, Ref, ref, watch } from 'vue';
  import { LoadingScreen, SamsungError } from '@/components/design';
  import { useWindowSize } from '@vueuse/core';

  import { Navbar } from './components/common';
  import { onUpdated } from 'vue';
  import { animateHeroNav } from './animations';
  import { lenis, raf } from './main';

  const { width, height } = useWindowSize();
  const noise: Ref<HTMLElement | null> = ref(null);

  const isSamsungBrowser = /samsung/i.test(navigator.userAgent);
  const mode = useColorMode();

  const samsungDarkModeError =
    isSamsungBrowser && !(mode.value === 'dark' && usePreferredDark());

  const LockeScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  watch([width, height], () => {
    if (noise.value) {
      noise.value.style.height = `${height.value * 2}px`;
      noise.value.style.width = `${width.value}px`;
    }
  });

  onMounted(() => {
    document.body.classList.add('stop-scrolling');
    window.scrollTo(0, 0);

    setTimeout(() => {
      requestAnimationFrame(raf);
    }, 2000);
  });

  // Todo: remove this
  onUpdated(() => {
    animateHeroNav();
  });
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
