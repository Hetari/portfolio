<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-[9999] scale-0"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-[19] size-full select-none bg-black opacity-50"
    :class="{ hidden: !isNavbarOpen }"
  ></div>

  <!-- ! pb-[10vh] pe-[7.5vw] ps-[7.5vw] pt-[15vh]-->
  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="esc()"
    class="fixed right-0 top-[1%] z-[19] h-[98vh] w-full translate-x-full select-none divide-dotted rounded-s-lg bg-tertiary-dark p-10 focus:outline-none max-md:w-[98%] md:w-3/5 md:px-20 lg:w-2/5"
  >
    <Circles id="circles" class="absolute right-0 top-0 opacity-0" />
    <div class="flex h-full flex-col items-center justify-between">
      <div class="relative z-[19] w-full">
        <ul class="mt-12 font-bold text-primary md:mt-24" id="navLinks">
          <li
            class="overflow-y-clip"
            v-for="l in navbarLinks"
            :key="l.label"
            :id="l.label"
          >
            <a
              :href="l.url"
              class="group my-2 flex w-fit translate-y-full cursor-pointer items-center justify-start leading-none"
            >
              <span
                class="h-4 w-4 scale-0 rounded-full bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="-translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-10"
              >
                {{ l.label }}
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div class="w-full">
        <div class="mt-2 h-full font-normal text-tertiary">
          <p class="text-left text-sm font-bold uppercase text-secondary">
            Email address
          </p>
          <Link
            class="h-6 font-medium tracking-wider text-secondary"
            tag="p"
            label="hetari4all@gmail.com"
            url="mailto:hetari4all@gmail.com"
          />
          <div class="mt-6 flex flex-nowrap justify-start gap-x-4">
            <Button
              class="contact opacity-0"
              v-for="social in socialLinks"
              :key="social.label"
              :label="social.label"
              :url="social.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <header :class="$attrs.class" class="z-20 h-fit -translate-y-full pt-6">
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
            class="flex items-start font-title text-3xl font-extrabold uppercase text-secondary-dark"
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
          class="ps-5 text-2xl font-normal text-secondary-dark max-xl:ps-10 max-lg:text-xl max-md:text-lg"
        >
          <Link
            v-for="l in navLinks"
            :key="l.label"
            tag="li"
            :label="l.label"
            :url="l.url"
            class="h-6 sm:h-8"
          />
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';

  import { Link, BurgerMenuBtn, MagneticEffect } from '..';
  import { Circles } from '../design';
  import { Button } from '../common';

  import {
    animateNavbarEnter,
    animateNavbarLeave,
    navbarScale,
  } from '@/animations';

  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;

    // animate the X on the button
    document.getElementById('magneto')?.classList.toggle('active');

    const x = document.getElementById('navbar') as HTMLDivElement;
    if (isNavbarOpen.value) {
      animateNavbarEnter('#navbar', '#navLinks li a', '.contact');
      x.focus();
    } else {
      animateNavbarLeave('#navbar', '#navLinks li a', '.contact');
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

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });

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

  const navbarLinks = [{ label: 'Home', url: '/' }, ...navLinks];

  const socialLinks = [
    {
      label: 'Twitter',
      url: 'https://x.com/4Hetari',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/hetari',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hetari/',
    },
  ];
</script>

<style scoped>
  #navLinks {
    font-size: calc(clamp(3.25em, 5vw, 4em));
  }
</style>
