<template>
  <!-- <h1
    class="opacity-70 text-[calc((50vw)_/_24_*_1.9)] font-bold tracking-[-0.1em] leading-[0.8]">
    CREATIVE <br />
    DEVELOPER
    <Star class="size-[calc((20vw)_/_24_*_1.9)]" />
  </h1> -->
  <section
    id="hero"
    class="padding-y h-full relative">
    <div class="absolute bottom-0 w-full">
      <div class="flex items-start w-full">
        <MyName />
        <Star class="size-[calc((50vw)_/_24_*_1.9)]" />
      </div>
      <div class="column-gap spacing flex grid-cols-12 flex-col md:grid">
        <div
          id="profile-container"
          class="relative col-span-3 aspect-[3/3.5] size-full overflow-clip rounded-lg md:block group shadow-2xl">
          <img
            id="profile-img"
            :src="profile"
            alt="Ebrahhem profile"
            decoding="async"
            class="size-full object-cover object-center group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>

    <!-- TODO: Marquee -->
  </section>
</template>

<script setup lang="ts">
  import MyName from './MyName.vue';
  import Star from './Star.vue';
  import { profile } from '@/assets/images';
</script>

<style scoped>
  .column-gap {
    column-gap: 2.5rem;
  }
</style>
