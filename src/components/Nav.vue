<template>
  <BurgerMenuBtnVue
    @click="toggleBtnClickAnimation"
    class="scale-0"
    id="burger" />

  <header class="mt-6 lg:mt-12">
    <nav class="flex justify-between">
      <MagneticEffect
        divId="name-container"
        textId="name">
        <div
          id="name-container"
          class="cursor-pointer -m-10 p-10 h-fit">
          <p
            id="name"
            class="font-title uppercase text-3xl font-extrabold flex items-start">
            hetari<span class="text-lg">&copy;</span>
          </p>
        </div>
      </MagneticEffect>

      <div class="flex">
        <p
          class="cursor-default select-none uppercase max-md:hidden text-tertiary font-bold text-lg max-2xl:text-xs">
          available for work and collaboration
        </p>

        <ul
          class="ps-5 max-xl:ps-10 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm text-secondary-dark font-normal font-body">
          <Link
            tag="li"
            label="Services"
            url="#" />
          <Link
            tag="li"
            label="Works"
            url="#" />
          <Link
            tag="li"
            label="About"
            url="#" />
          <Link
            tag="li"
            label="Contact"
            url="#" />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import Link from './Link.vue';
  import { navbarScale } from '@/animations';
  import BurgerMenuBtnVue from './BurgerMenuBtn.vue';
  import { onMounted, ref } from 'vue';
  import MagneticEffect from './MagneticEffect.vue';

  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
    document.getElementById('BurgerMenu')?.classList.toggle('active');
  };

  onMounted(() => {
    navbarScale('#burger', '#hero');
  });
</script>
