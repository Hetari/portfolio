<template>
  <LoadingScreen v-cloak="true" />

  <template v-if="isSamsungBrowser">
    <SamsungError />
  </template>

  <div class="pointer-events-none fixed inset-0 z-50">
    <svg
      class="h-[150vh] w-full object-cover object-center"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect ref="noise" class="size-full" filter="url(#noise)" opacity="0.15" />

      <!-- <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          base-frequency="0.8"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect ref="noise" class="size-full" filter="url(#noise)" opacity="0.12" /> -->
    </svg>
  </div>

  <!-- ! h-[80vh] xl:h-[78vh] 3xl:h-[75vh] -->
  <Navbar @isLocked="LockeScroll" />

  <!-- max-w-9xl mx-auto -->
  <main class="relative h-full">
    <Hero />
    <div
      class="relative rounded-t-3xl bg-[#0B0B0A] py-[5%] text-flax-smoke-200"
    >
      <Services />
      <Marquee />
      <!-- <Works /> -->
    </div>
    <div class="relative overflow-y-clip">
      <aboutMe />
      <People />
    </div>
    <div class="h-svh"></div>
  </main>
</template>

<script setup lang="ts">
  import { Hero, People, Services, aboutMe } from '@/components/sections';
  import { onMounted, Ref, ref, watch } from 'vue';
  import { LoadingScreen, Marquee, SamsungError } from '@/components/design';
  import { useWindowSize } from '@vueuse/core';

  import { Navbar } from './components/common';
  import { lenis, raf } from './main';

  const { width, height } = useWindowSize();
  const noise: Ref<HTMLElement | null> = ref(null);

  const isSamsungBrowser = /samsung/i.test(navigator.userAgent);

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
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
