<template>
  <!-- <h1
    class="opacity-70 text-[calc((50vw)_/_24_*_1.9)] font-bold tracking-[-0.1em] leading-[0.8]">
    CREATIVE <br />
    DEVELOPER
    <Star class="size-[calc((20vw)_/_24_*_1.9)]" />
  </h1> -->
  <section id="hero" class="padding-y relative h-full w-full">
    <div class="absolute bottom-0 w-full items-end">
      <div class="flex w-full items-start">
        <MyName />
        <Star class="hide-on-mobile" />
      </div>

      <div class="column-gap spacing-y flex grid-cols-12 md:grid">
        <div
          id="profile-container"
          class="group relative col-span-3 hidden aspect-[3/3.5] size-full select-none overflow-clip rounded-lg shadow-2xl md:block"
        >
          <img
            id="profile-img"
            :src="profile"
            alt="Ebrahhem profile"
            decoding="async"
            class="size-full -scale-x-100 rounded-lg object-cover object-center transition-transform duration-300 group-hover:-scale-x-105 group-hover:scale-y-105"
          />
        </div>
      </div>
    </div>
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
