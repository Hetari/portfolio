<template>
  <LoadingScreen v-cloak="true" />

  <div v-cloak="true">
    <div class="pointer-events-none fixed inset-0 z-50 overflow-clip">
      <svg
        class="size-full object-cover object-center"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feBlend mode="screen" />
        </filter>
        <rect
          ref="noise"
          class="size-full"
          filter="url(#noise)"
          opacity="0.15"
        />
      </svg>
    </div>

    <!-- ! h-[80vh] xl:h-[78vh] 3xl:h-[75vh] -->
    <Navbar @isLocked="LockeScroll" class="padding-x absolute inset-0" />
    <!-- max-w-9xl mx-auto -->
    <main class="relative h-full">
      <Hero />
      <Services />
    </main>
  </div>
</template>

<script setup lang="ts">
  import Lenis from 'lenis';
  import { Navbar } from '@/components/common';
  import { Hero, Services } from './components/sections';
  import { onMounted, Ref, ref, watch } from 'vue';
  import { LoadingScreen } from './components/design';
  import { useWindowSize } from '@vueuse/core';

  const { width, height } = useWindowSize();
  const noise: Ref<HTMLElement | null> = ref(null);

  const lenis = new Lenis();
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  const LockeScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  onMounted(async () => {
    setTimeout(() => {
      requestAnimationFrame(raf);
    }, 2000);
  });

  watch([width, height], () => {
    if (noise.value) {
      noise.value.style.height = `${height.value}px`;
      noise.value.style.width = `${width.value}px`;
    }
  });
</script>
