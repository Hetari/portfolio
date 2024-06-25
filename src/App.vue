<template>
  <LoadingScreen v-cloak="true" />

  <div v-cloak="true">
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
    <main class="relative mx-auto h-full max-w-[1920px]">
      <Hero />
      <div class="relative z-20 min-h-screen w-full overflow-x-clip">
        <section
          id="services"
          class="s-full h-screen rounded-t-3xl bg-[#0B0B0A]"
        ></section>
      </div>
    </main>
    <!-- <div class="relative z-20 h-screen min-h-screen w-full overflow-x-clip">
      11
    </div>
    <div class="relative z-20 h-screen min-h-screen w-full overflow-x-clip">
      22
    </div>
    <div class="relative z-20 h-screen min-h-screen w-full overflow-x-clip">
      33
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import Lenis from 'lenis';
  import { Navbar } from '@/components/common';
  import { Hero } from './components/sections';
  import { onMounted, ref } from 'vue';
  import { LoadingScreen } from './components/design';

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
      window.scrollTo(0, 0);
      requestAnimationFrame(raf);
    }, 2000);
  });
</script>
