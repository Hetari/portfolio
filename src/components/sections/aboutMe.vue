<template>
  <section
    id="about-me-section"
    class="common-padding relative z-10 overflow-y-clip rounded-b-3xl bg-[#0B0B0A] text-flax-smoke-200 shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h1
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-1-alt lg:heading-1 section-heading col-span-full font-extrabold uppercase leading-none md:col-span-8 md:col-start-6"
      ></h1>
    </div>

    <div class="padding-y md:column-gap mt-6 grid grid-cols-12">
      <div
        class="pointer-events-none col-span-full select-none content-end rounded-lg md:col-span-4"
      >
        <img
          :src="profile2"
          class="aspect-[1/1.5] rounded-lg object-cover object-top mix-blend-screen brightness-90 grayscale"
          alt="Headshot of Ebraheem facing a camera"
        />
      </div>
      <div class="col-span-11 mt-10 md:col-span-8 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] text-balance font-medium leading-snug"
        >
          With a passion for design and development, I take projects from
          ideation to launch, ensuring a seamless journey that leaves a lasting
          positive impact on the digital landscape and your business.
        </p>

        <div
          class="mt-[5%] flex justify-start gap-10 text-flax-smoke-300 sm:gap-20"
        >
          <p class="heading-6 text-nowrap text-center text-flax-smoke-300/85">
            ( ABOUT ME )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            Creating great web experiences is my primary focus. I ensure each
            project leaves users with a feel-good sensation through meticulous
            attention to detail and user-centric design principles. <br /><br />
            When I'm not immersed in web development and design, you can find me
            sharing insights about my freelance journey on <i>&Xopf;</i>,
            loudly, playing music (Funk), or just relaxing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import { profile2 } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const aboutMe = ref('ٍSelected Projects /');

  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

  onBeforeMount(() => {
    aboutMe.value = textSplitterIntoChar(
      'Programmer, Developer, Web-animator/',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>
