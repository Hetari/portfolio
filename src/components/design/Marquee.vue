<template>
  <section
    v-if="!isSmallScreen"
    id="marquee-section"
    class="heading-1 sm:heading-display mb-32 flex h-[60vh] w-full flex-col items-stretch justify-around overflow-x-clip bg-[#0B0B0A] leading-none text-flax-smoke-200 md:h-[75svh] lg:h-svh"
  >
    <!-- Marquee 1: Dynamic Direction -->
    <div id="marquee-1" class="flex">
      <h4
        v-for="i in 3"
        :key="`marquee1-${i}`"
        class="flex items-center whitespace-nowrap text-nowrap font-bold"
      >
        Ebraheem Alhetari
        <div class="w-fit scale-[0.5] sm:mx-10 sm:scale-75">
          <svg
            style="width: var(--heading-display)"
            viewBox="0 0 55 37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.2949 2.11614L35.9286 1.74986L35.4107 1.75L24.2607 1.753L21.2423 1.75381L23.3775 3.88724L32.4356 12.9381L11.7961 12.939H11.7959L3.00014 12.938L1.75 12.9379V14.188V22.991V24.241H3H32.4361L23.3764 33.2959L21.2405 35.4305L24.2602 35.43L35.4102 35.428L35.9278 35.4279L36.2938 35.0619L51.8838 19.4739L52.7678 18.5901L51.8839 17.7061L36.2949 2.11614Z"
              class="fill-current stroke-current stroke-[2.5]"
            />
          </svg>
        </div>
      </h4>
    </div>

    <!-- Marquee 2: Left to Right -->
    <div id="marquee-2" class="flex">
      <h4
        v-for="i in 2"
        :key="`marquee2-${i}`"
        class="flex items-center whitespace-nowrap text-nowrap font-bold"
      >
        <span
          class="font-sans text-transparent [-webkit-text-stroke:1.5px_white]"
        >
          welcome to the show
        </span>

        <div class="w-fit scale-[0.5] fill-current sm:mx-10 sm:scale-75">
          <svg
            style="width: var(--heading-display)"
            viewBox="0 0 102 102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999042 53.5H1.00096L44.9238 53.5168L13.8776 84.5869L13.8762 84.5882L17.4118 88.1238L17.4131 88.1224L17.4149 88.1206L48.4832 57.0761L48.5 100.999V101.001H53.5V100.999L53.5168 57.0761L84.5869 88.1224L84.5882 88.1238L88.1238 84.5882L88.1224 84.5869L57.0761 53.5168L100.999 53.5H101.001V48.5H100.999L57.0761 48.4832L88.1206 17.4149L88.1224 17.4131L88.1238 17.4118L84.5882 13.8762L84.5869 13.8776L53.5168 44.9238L53.5 1.00096V0.999042H48.5V1.00096L48.4832 44.9238L17.4131 13.8776L17.4118 13.8762L13.8762 17.4118L13.8776 17.4131L44.9238 48.4832L1.00096 48.5H0.999042V53.5Z"
              class="fill-none stroke-current stroke-[1.5]"
            />
          </svg>
        </div>
      </h4>
    </div>

    <!-- Marquee 3: Right to Left -->
    <div id="marquee-3" class="flex">
      <h4
        v-for="i in 3"
        :key="`marquee3-${i}`"
        class="flex items-center whitespace-nowrap text-nowrap font-bold"
      >
        enjoy the animation
        <div class="w-fit scale-[0.5] fill-current sm:mx-10 sm:scale-75">
          <svg
            style="width: var(--heading-display)"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.8234 1.99099C49.4293 9.09696 46.8886 17.4122 43.0707 24.0426C35.0272 38.01 21.1141 47.4665 5.21739 49.7899C4.1712 49.9394 2.55435 50.1024 1.65761 50.1567C0.747283 50.1975 0 50.279 0 50.3334C0 50.3877 0.747283 50.4692 1.65761 50.51C2.55435 50.5644 4.1712 50.7274 5.21739 50.8769C21.1141 53.2002 35.0272 62.6567 43.0707 76.6241C46.8886 83.2546 49.4293 91.5698 49.8234 98.6758C49.8641 99.5861 49.9457 100.333 50 100.333C50.0543 100.333 50.1359 99.5861 50.1766 98.6758C50.5707 91.5698 53.1114 83.2546 56.9293 76.6241C64.9728 62.6567 78.8859 53.2002 94.7826 50.8769C95.8288 50.7274 97.4456 50.5644 98.3424 50.51C99.2527 50.4692 100 50.3877 100 50.3334C100 50.279 99.2527 50.1975 98.3424 50.1567C97.4456 50.1024 95.8288 49.9394 94.7826 49.7899C78.8859 47.4665 64.9728 38.01 56.9293 24.0426C53.1114 17.4122 50.5707 9.09696 50.1766 1.99099C50.1359 1.08066 50.0543 0.333377 50 0.333377C49.9457 0.333377 49.8641 1.08066 49.8234 1.99099Z"
              class="fill-current"
            />
          </svg>
        </div>
      </h4>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import gsap from 'gsap';
  import { Observer, ScrollToPlugin } from 'gsap/all';

  const { width } = useWindowSize();
  const isSmallScreen = computed(() => width.value < 640);

  // @ts-expect-error: No defs provided
  import { horizontalLoop } from './horizontal-loop.js';
  import { useWindowSize } from '@vueuse/core';

  gsap.registerPlugin(Observer);
  gsap.registerPlugin(ScrollToPlugin);

  const initializeMarqueeWithObserver = (
    marqueeId: string,
    directionReverse: boolean = false,
    angle: number = 0,
    speed: number = 1,
  ) => {
    // Query elements once and reuse
    const marqueeElement = document.getElementById(marqueeId) as HTMLElement;
    const elements = gsap.utils.toArray(`#${marqueeId} h4`) as HTMLElement[];

    gsap.to(marqueeElement, {
      scrollTrigger: {
        trigger: marqueeElement,
        scrub: true,
      },
      ease: 'power1.inOut',
      rotateZ: angle,
      transformOrigin: 'center center',
    });

    // Initialize the timeline and store it for reuse
    const tl = horizontalLoop(elements, {
      repeat: -1,
      speed,
      reversed: directionReverse,
    });

    // Observer to control the direction and speed
    // const targetContainer = marqueeElement.parentElement as HTMLElement;
    Observer.create({
      type: 'scroll',
      onChangeY: (self) => {
        let factor = directionReverse ? -2.5 : 2.5;
        if (self.deltaY < 0) {
          factor *= -1;
        }
        gsap
          .timeline({ defaults: { ease: 'none' } })
          .to(tl, { timeScale: factor, duration: 0.2 });
        //   .to(tl, { timeScale: factor / 2.5, duration: 1 }, '+=0.3');
      },
    });
  };

  onMounted(() => {
    if (!isSmallScreen.value) {
      initializeMarqueeWithObserver('marquee-1', true, -10, 0.3);
      initializeMarqueeWithObserver('marquee-2', false, 1, 0.6);
      initializeMarqueeWithObserver('marquee-3', true, 10);
    }
  });
</script>
