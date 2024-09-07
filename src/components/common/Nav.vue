<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-[9999] scale-0 drop-shadow-lg"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-[9998] size-full select-none bg-black opacity-50"
    :class="{ hidden: !isNavbarOpen }"
  ></div>

  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="toggleBtnClickAnimation()"
    class="fixed right-0 top-[1dvh] z-[9998] h-[98dvh] w-full translate-x-full select-none rounded-s-lg bg-flax-smoke-950 p-5 will-change-transform focus:outline-none max-md:w-[98%] sm:p-10 md:w-3/5 md:px-20 lg:w-2/5"
  >
    <Circles id="circles" class="absolute right-0 top-0 opacity-25" />
    <div class="flex h-full flex-col items-center justify-between">
      <div class="relative z-[19] w-full">
        <ul
          class="heading-2 mt-12 font-bold text-flax-smoke-50 md:mt-24"
          id="navLinks"
        >
          <li
            class="overflow-y-clip"
            v-for="l in navbarLinks"
            :key="l.label"
            :id="l.label"
          >
            <a
              :href="l.url"
              @click="gotoSection(l.url)"
              class="group my-2 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-none"
            >
              <span
                class="h-4 w-4 scale-0 rounded-full bg-flax-smoke-50 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="font-fancy -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"
              >
                {{ l.label }}
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div class="w-full">
        <div class="mt-2 h-full font-normal text-flax-smoke-50">
          <p class="text-left text-sm font-bold uppercase">Email address</p>
          <Link
            class="!h-6 font-medium tracking-wider"
            tag="p"
            label="hetari4all@gmail.com"
            url="mailto:hetari4all@gmail.com"
          />
          <div class="mt-6 flex flex-nowrap justify-start gap-x-1">
            <Button
              class="contact border border-flax-smoke-600 opacity-0"
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

  <header
    :class="$attrs.class"
    class="padding-x absolute inset-0 z-20 h-fit -translate-y-full pt-6"
  >
    <nav class="flex justify-between">
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div id="name-container" class="group -m-10 h-fit cursor-pointer p-10">
          <h1
            id="name"
            class="font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl"
          >
            hetari
            <span
              class="font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
              >&copy;</span
            >
          </h1>
        </div>
      </MagneticEffect>

      <div class="flex justify-start">
        <p
          class="heading-6 font-fancy hidden select-none font-bold uppercase text-flax-smoke-400 md:block"
        >
          available for freelancers <br />
          work and collaboration
        </p>
      </div>
      <div class="flex">
        <ul
          class="w-full flex-1 gap-1 overflow-y-hidden text-lg font-medium md:flex md:gap-2 md:text-xl lg:gap-4 lg:text-2xl xl:text-3xl"
        >
          <Link
            v-for="(l, index) in navLinks"
            :key="l.label"
            tag="li"
            :label="l.label + (index !== navLinks.length - 1 ? ',' : '')"
            :url="l.url"
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
  import { navbarLinks, navLinks, socialLinks } from '@/data';
  import { lenis } from '@/main';

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

  const gotoSection = (url: string) => {
    lenis.start();
    lenis.scrollTo(url, { duration: 1 });
    toggleBtnClickAnimation();
  };

  onMounted(() => {
    navbarScale('#burger', '#hero');
  });

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>
