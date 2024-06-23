<template>
  <div class="relative size-full overflow-clip">
    <svg
      class="pointer-events-none fixed inset-0 z-30 size-full object-cover object-center"
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
      <rect class="size-full" filter="url(#noise)" opacity="0.15" />
    </svg>
  </div>

  <!-- ! h-[80vh] xl:h-[78vh] 3xl:h-[75vh] -->
  <Navbar
    @isLocked="LockeScroll"
    class="padding-x absolute inset-0 mx-auto max-w-[1920px]"
  />
  <main class="padding-x relative mx-auto max-w-[1920px]">
    <Hero />
  </main>
  <div class="h-screen"></div>
</template>

<script setup lang="ts">
  import Lenis from 'lenis';
  import { Navbar } from '@/components/common';
  import { Hero } from './components/sections';
  import { onMounted } from 'vue';

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

  onMounted(() => {
    requestAnimationFrame(raf);
  });
</script>
