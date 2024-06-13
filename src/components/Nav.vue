<template>
  <BurgerMenuBtnVue
    class="scale-0"
    id="burger" />

  <div class="h-screen"></div>
  <div
    class="h-screen"
    id="t"></div>
  <div class="h-screen"></div>
</template>

<script setup lang="ts">
  import { navbarScale } from '@/animations/navbar';
  import BurgerMenuBtnVue from './BurgerMenuBtn.vue';
  import { onMounted } from 'vue';

  onMounted(() => {
    navbarScale('#burger', '#t');
  });
</script>
