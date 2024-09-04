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
    @keydown.esc="esc()"
    class="fixed right-0 top-[1dvh] z-[9998] h-[98dvh] w-full translate-x-full select-none rounded-s-lg bg-flax-smoke-950 p-5 will-change-transform focus:outline-none max-md:w-[98%] sm:p-10 md:w-3/5 md:px-20 lg:w-2/5"
  >
    <Circles id="circles" class="absolute right-0 top-0 opacity-25" />
    <div class="flex h-full flex-col items-center justify-between">
      <div class="relative z-[19] w-full">
        <ul class="mt-12 font-bold text-flax-smoke-50 md:mt-24" id="navLinks">
          <li
            class="overflow-y-clip"
            v-for="l in navbarLinks"
            :key="l.label"
            :id="l.label"
          >
            <a
              :href="l.url"
              @click="gotoSection(l.url)"
              class="group my-2 flex w-fit translate-y-full cursor-pointer items-center justify-start leading-none"
            >
              <span
                class="h-4 w-4 scale-0 rounded-full bg-flax-smoke-50 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="-translate-x-5 font-fancy transition-all duration-300 ease-in-out group-hover:translate-x-5"
              >
                {{ l.label }}
              </p>
            </a>
          </li>
        </ul>
        <ul class="mt-12 font-bold text-flax-smoke-50 md:mt-24" id="navLinks">
        <li >
            <p
              class="group my-2 flex w-fit translate-y-full cursor-pointer items-center justify-start leading-none"
            >
              <span
                class="h-4 w-4 scale-0 rounded-full bg-flax-smoke-50 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="-translate-x-5 font-fancy transition-all duration-300 ease-in-out group-hover:translate-x-5"
              >
                {{ i18n.global.locale == 'en' ? 'Language: English' : 'اللغة: العربية' }}
              </p>
            </p>
          </li>
        </ul>

      </div>

      <div class="w-full">
        <div class="mt-2 h-full font-normal text-flax-smoke-50">
          <p class="text-left text-sm font-bold uppercase">Email address</p>
          <Link
            class="h-6 font-medium tracking-wider"
            tag="p"
            label="hetari4all@gmail.com"
            url="mailto:hetari4all@gmail.com"
          />
          <div class="mt-6 flex flex-nowrap justify-start gap-x-1 sm:gap-x-4">
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
            class="flex items-start font-fancy text-xl font-extrabold uppercase md:text-3xl"

          >
            {{ $t('common.hetari') }}
          <span
              class="!inline !origin-center font-fancy text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
              >&copy;</span
            >
          </h1>
        </div>
      </MagneticEffect>

      <div class="flex justify-start">
        <p
          class="heading-6 hidden select-none font-fancy font-bold uppercase text-flax-smoke-400 md:block"
        >
          {{ $t('nav.available') }} {{ $t('nav.forFreelancersWork') }} <br /> {{ $t('nav.andCollaboration') }}</p>
      </div>
      <div class="flex">
        <!-- ps-5 max-xl:ps-10  -->
        <ul
          class="w-full flex-1 gap-1 overflow-y-hidden text-lg font-medium md:flex md:gap-2 lg:gap-4 xl:text-3xl"
        >
          <Link
            v-for="(l, index) in navLinks"
            :key="l.label"
            tag="li"
            :label="l.label + (index !== navLinks.length - 1 ? ' ,' : '')"
            :url="l.url"
            class="h-[50%] max-md:h-5"
          />
        </ul>
        <div
        @click="toggleLocalLang()"
        >
          <svg
          class="ms-5 size-7 cursor-pointer xl:size-9"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          color="#000000"
          fill="none"
        >
          <path
            d="M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
        </div>
        
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
  import { navbarLinks, socialLinks, navLinks } from '@/data';
  import { i18n, lenis } from '@/main';

  const isNavbarOpen = ref(false);
  const currentLocaleIndex = ref(0);

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

  const toggleLocalLang = () => {
    // TODO: add animation when changing the language
    currentLocaleIndex.value =
      (currentLocaleIndex.value + 1) % i18n.global.availableLocales.length;
    const newLocale = i18n.global.availableLocales[currentLocaleIndex.value];
    i18n.global.locale = newLocale;
    

    togglePageDirection();
  };

  

  const togglePageDirection = () => {
    if (i18n.global.locale == 'en') {
      document.body.style.direction = 'ltr';
      toggleFontFamily('en');
    }
    else if (i18n.global.locale == 'ar') {
      document.body.style.direction = 'rtl';
    toggleFontFamily('ar');
    }
  }
  const toggleFontFamily = (lang: 'ar' | 'en') => {
    if (lang === 'ar') {
    document.documentElement.style.setProperty('--font-fancy', '"Readex Pro", sans-serif');
  }
  else{
    document.documentElement.style.setProperty('--font-fancy', '"Bricolage Grotesque", sans-serif');
  }
  }

  // Animation on component mount
  onMounted(() => {
     const currentLocale = i18n.global.locale;
  currentLocaleIndex.value = i18n.global.availableLocales.indexOf(currentLocale);
    // togglePageDirection()
    navbarScale('#burger', '#hero');
  });

  const esc = () => {
    toggleBtnClickAnimation();
  };

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>

<style scoped>
  #navLinks {
    font-size: calc(clamp(3.25em, 5vw, 4em));
  }
</style>
