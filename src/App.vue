<template>
  <div class="relative size-full overflow-clip">
    <img
      src="https://grainy-gradients.vercel.app/noise.svg"
      alt="background"
      class="pointer-events-none fixed inset-0 z-30 size-full object-cover object-center opacity-15"
    />
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
