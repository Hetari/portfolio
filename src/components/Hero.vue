<template>
  <section
    id="hero"
    class="padding-y space-y-16">
    <!-- <h1
      class="opacity-70 text-[calc((50vw)_/_24_*_1.9)] font-bold tracking-[-0.1em] leading-[0.8]">
      CREATIVE <br />
      DEVELOPER
      <Star class="size-[calc((20vw)_/_24_*_1.9)]" />
    </h1> -->

    <!-- h-[70dvh] flex-center -->
    <div class="flex items-start">
      <MyName />
      <Star class="size-[calc((50vw)_/_24_*_1.9)]" />
    </div>

    <!-- TODO: Marquee -->
  </section>
</template>

<script setup lang="ts">
  import MyName from './MyName.vue';
  import Star from './Star.vue';
</script>
