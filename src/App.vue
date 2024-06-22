<template>
  <div class="relative size-full overflow-clip">
    <svg
      class="pointer-events-none fixed inset-0 z-30 size-full object-cover object-center opacity-50"
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
      <rect class="size-full" filter="url(#noise)" opacity="0.3" />
    </svg>
  </div>

  <Nav class="padding-x mx-auto max-w-[1920px]" />
  <main class="padding-x mx-auto h-[80vh] max-w-[1920px] lg:h-[75vh]">
    <Hero />
  </main>
  <div class="h-screen"></div>
</template>

<script setup lang="ts">
  import { Nav, Hero } from '@/components';
</script>
