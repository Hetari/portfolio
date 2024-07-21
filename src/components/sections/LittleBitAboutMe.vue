<template>
  <!-- <svg
    class="absolute fill-[#0B0B0A] left-0 top-0 origin-center  object-center"
    id="morph-example"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
  >
    <path
      id="rectangle"
      class="transition-all duration-500 ease-in-out"
      :d="initialPath"
    />
  </svg> -->
  <section
    id="little-bit-about-me-section"
    class="padding-x absolute rounded-b-3xl bg-[#0B0B0A] py-[5%] text-flax-smoke-200"
  >
    <h1
      id="little-bit-about-me"
      v-html="littleBitAboutMe"
      class="text-[calc(3.125rem_+_((1vw_-_6.4px)_*_6.0938))] font-extrabold uppercase leading-loose"
    ></h1>

    <div
      id="little-bit-about-me-text"
      class="relative flex w-full flex-col items-end justify-end font-medium leading-snug text-flax-smoke-300 opacity-0 sm:-mt-12 lg:grid"
    >
      <div class="relative mt-40 flex flex-auto items-center justify-center">
        <svg
          class="absolute left-1/2 top-1/2 z-10 mt-20 hidden w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 opacity-10 sm:block 2xl:max-w-4xl 3xl:max-w-5xl"
          viewBox="0 0 709 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="709" height="300" rx="169.963" fill="#AFAF9D"></rect>
        </svg>

        <img
          :src="profile2"
          id="profile2"
          class="z-20 mx-auto translate-y-1/2 opacity-50 mix-blend-lighten brightness-90 grayscale"
          alt="Me"
        />
      </div>

      <p
        class="text-fancy w-full text-[calc(1.375rem+_((1vw_-_6.4px)_*_0.7813))] sm:font-semibold"
      >
        I empower startups of all scales by creating custom web experiences that
        are both memorable and successful. With a deep passion for design and
        development, I guide projects from ideation to launch, ensuring a
        seamless and impactful journey in the digital landscape. My commitment
        to excellence drives the success of startups, delivering unique and
        engaging web solutions that stand out.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText, shapeChange } from '@/animations';
  import { profile2 } from '@/assets/images';
  import { textSplitter } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const littleBitAboutMe = ref('Selected Works /');

  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

  onBeforeMount(() => {
    littleBitAboutMe.value = textSplitter('A little bit about me / ', true);
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me-text',
      0.7,
      0.01,
      0,
    );
    shapeChange('#little-bit-about-me-section');
  });
</script>
