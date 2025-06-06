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

      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          base-frequency="0.8"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect
        ref="noise"
        class="size-full"
        filter="url(#noise)"
        opacity="-0.88"
      />
    </svg>
  </div>

  <Cursor />
  <Navbar @isLocked="LockeScroll" />

  <main class="relative min-h-full">
    <Hero />
    <div
      class="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]"
    >
      <Services />
      <Marquee />
      <Works />
    </div>

    <aboutMe />
    <People />
    <Contact />
  </main>

  <Footer />
</template>

<script setup lang="ts">
  import {
    Hero,
    People,
    Services,
    Works,
    aboutMe,
    Contact,
  } from '@/components/sections';
  import { onMounted, type Ref, ref, watch } from 'vue';
  import {
    LoadingScreen,
    Marquee,
    SamsungError,
    Footer,
    Cursor,
  } from '@/components/design';
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
    // TODO:
    // window.scrollTo(0, 0);

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
