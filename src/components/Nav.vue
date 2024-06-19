<template>
  <BurgerMenuBtnVue
    @click="toggleBtnClickAnimation"
    class="scale-0"
    id="burger"
  />

  <header :class="$attrs.class" class="pt-6 lg:pt-12">
    <nav class="flex justify-between">
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div id="name-container" class="group -m-10 h-fit cursor-pointer p-10">
          <p
            id="name"
            class="flex items-start font-title text-3xl font-extrabold uppercase"
          >
            hetari<span
              class="!inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
              >&copy;</span
            >
          </p>
        </div>
      </MagneticEffect>

      <div class="flex">
        <p
          class="cursor-default select-none text-lg font-bold uppercase text-tertiary max-2xl:text-xs max-md:hidden"
        >
          available for work and collaboration
        </p>

        <ul
          class="ps-5 font-body text-2xl font-normal text-secondary-dark max-xl:ps-10 max-lg:text-xl max-md:text-lg max-sm:text-sm"
        >
          <Link tag="li" label="Services" url="#" />
          <Link tag="li" label="Works" url="#" />
          <Link tag="li" label="About" url="#" />
          <Link tag="li" label="Contact" url="#" />
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
