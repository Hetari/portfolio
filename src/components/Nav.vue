<template>
  <BurgerMenuBtnVue
    @click="toggleBtnClickAnimation"
    class="scale-0"
    id="burger" />

  <header class="common-padding">
    <nav class="grid grid-cols-8 gap-14">
      <h1
        class="col-span-3 font-title uppercase text-3xl font-extrabold flex items-start">
        hetari<span class="text-lg">&copy;</span>
      </h1>

      <p
        class="uppercase col-span-4 text-right text-tertiary font-bold text-lg">
        available for work and collaboration
      </p>

      <ul class="ps-10 text-2xl text-secondary-dark font-normal font-body">
        <Link
          label="Services"
          url="#" />
        <Link
          label="Works"
          url="#" />
        <Link
          label="About"
          url="#" />
        <Link
          label="Contact"
          url="#" />
      </ul>
    </nav>
  </header>

  <div class="h-screen"></div>
  <div
    id="t"
    class="h-screen"></div>
</template>

<script setup lang="ts">
  import Link from './Link.vue';
  // import { navbarScale } from '@/animations';
  import { navbarScale } from '@/animations';
  import BurgerMenuBtnVue from './BurgerMenuBtn.vue';
  import { onMounted, ref } from 'vue';

  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
    document.getElementById('BurgerMenu')?.classList.toggle('active');
  };

  onMounted(() => {
    navbarScale('#burger', '#t');
  });
</script>
