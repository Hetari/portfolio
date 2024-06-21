<template>
  <BurgerMenuBtnVue
    @click="toggleBtnClickAnimation"
    class="scale-0"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-[9998] size-full select-none bg-black opacity-25"
    :class="{ 'scale-0': !isNavbarOpen }"
  ></div>

  <!-- ! rounded-s-lg -->
  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="esc()"
    class="fixed right-0 top-[0%] z-[9998] h-[100%] w-full select-none bg-black pb-[10vh] pe-[7.5vw] ps-[7.5vw] pt-[15vh] md:w-1/2 lg:w-[35%]"
    :class="{ 'scale-0': !isNavbarOpen }"
  >
    <div class="flex h-full flex-col items-center justify-between">
      <div class="w-full">
        <p class="mb-12 text-start text-xs font-medium uppercase leading-none">
          Navigation
        </p>
        <div class="block h-[1px] w-full bg-primary opacity-50"></div>

        <ul class="mt-12 h-full font-normal text-secondary" id="navLinks">
          <!-- <MagneticEffect
            :divId="l.label"
            :textId="l.label"
            > -->
          <li v-for="l in navLinks" :key="l.label" :id="l.label">
            <a
              :href="l.url"
              class="group my-6 flex cursor-pointer items-center justify-start"
            >
              <span
                class="h-4 w-4 scale-0 rounded-full bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="transition-all duration-300 ease-in-out group-hover:translate-x-10"
              >
                {{ l.label }}
              </p>
            </a>
          </li>
          <!-- </MagneticEffect> -->
        </ul>
      </div>
    </div>

    <div>
      <div class="w-full">
        <p class="mb-12 text-start text-xs font-medium uppercase leading-none">
          Social
        </p>
      </div>
    </div>
  </div>

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
              class="!inline !origin-center font-title text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
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
          class="ps-5 text-2xl font-normal text-secondary-dark max-xl:ps-10 max-lg:text-xl max-md:text-lg max-sm:text-sm"
        >
          <Link
            v-for="l in navLinks"
            :key="l.label"
            tag="li"
            :label="l.label"
            :url="l.url"
          />
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useScroll, useScrollLock } from '@vueuse/core';

  import Link from './Link.vue';
  import BurgerMenuBtnVue from './BurgerMenuBtn.vue';
  import MagneticEffect from './MagneticEffect.vue';

  import { navbarScale } from '@/animations';

  const isNavbarOpen = ref(false);
  const el = ref(document.querySelector('body') as HTMLBodyElement);

  // Using scroll and scroll lock utilities
  useScroll(el);
  const isLocked = useScrollLock(el);

  const toggleBtnClickAnimation = () => {
    isLocked.value = !isLocked.value;
    isNavbarOpen.value = !isNavbarOpen.value;
    document.getElementById('magneto')?.classList.toggle('active');

    const x = document.getElementById('navbar') as HTMLDivElement;
    if (isNavbarOpen.value) {
      x.focus();
    } else {
      x.blur();
    }
  };

  // Animation on component mount
  onMounted(() => {
    navbarScale('#burger', '#hero');
  });

  const esc = () => {
    toggleBtnClickAnimation();
  };

  const navLinks = [
    {
      label: 'Services',
      url: '#',
    },
    {
      label: 'Works',
      url: '#',
    },
    {
      label: 'About',
      url: '#',
    },
    {
      label: 'Contact',
      url: '#',
    },
  ];
</script>

<style scoped>
  #navLinks {
    font-size: calc(clamp(3.25em, 5vw, 4em));
  }
</style>
