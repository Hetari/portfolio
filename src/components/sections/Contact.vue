<template>
  <section
    id="contact-section"
    class="relative min-h-svh w-full select-none overflow-y-clip p-[4vh]"
  >
    <div
      class="flex-center relative h-[92vh] w-full flex-col rounded-lg bg-black uppercase"
    >
      <video
        class="absolute bottom-0 left-0 size-full rounded-lg object-cover object-bottom"
        :src="contact"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <!-- :style="'background-image: url(' + contact + ') !important; '" -->
      <div class="flex-center z-10 flex-col gap-y-10">
        <p
          class="heading-4 max-w-[30ch] text-center font-mono text-flax-smoke-300"
        >
          Your design is a masterpiece waiting to become alive.
        </p>
        <h1
          id="make-it-happen"
          class="heading-1 max-w-[10ch] text-center leading-none text-flax-smoke-200"
          v-html="makeItHappen"
        ></h1>
        <div
          class="mt-[5%] flex scale-150 items-center lg:scale-[1.5] xl:scale-2 2xl:scale-[2.5] 3xl:scale-3"
        >
          <Button
            :data-cal-namespace="dataCalNamespace"
            :data-cal-link="dataCalLink"
            :data-cal-config="dataCalConfig"
            label="Get in touch"
          />
        </div>
      </div>
      <div
        class="absolute bottom-5 flex w-full items-center justify-center px-5 md:justify-between"
      >
        <div class="hidden md:flex">
          <div class="relative border border-flax-smoke-300">
            <Vue3Lottie
              ref="customControl"
              :animationData="earthLottie"
              :loop="true"
              :autoPlay="true"
            />
          </div>
          <div
            class="flex-center py w-fit flex-col border border-l-0 border-flax-smoke-300 font-mono text-flax-smoke-300"
          >
            <p
              class="flex size-full items-center justify-start border-b border-flax-smoke-300 pl-1 pr-2 font-bold"
            >
              Working Globally
            </p>
            <p class="flex size-full items-center justify-start pl-1 pr-2">
              Available Sep '24
            </p>
          </div>
        </div>

        <div class="heading-6 w-fit text-flax-smoke-500">
          <p class="w-full font-bold uppercase">For further inquiries</p>
          <Link
            class="h-6 text-right font-medium lowercase tracking-wider text-flax-smoke-300"
            label="hetari4all@gmail"
            :icon="true"
            url="mailto:hetari4all@gmail"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { earthLottie } from '@/assets/videos';
  import { Button } from '../common';
  import { Vue3Lottie } from 'vue3-lottie';
  import Link from '../Link.vue';
  import { contact } from '@/assets/videos';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { textSplitterIntoChar } from '@/functions';
  import { animateSplitText } from '@/animations';
  import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

  const makeItHappen = ref("Let's Make it happen");
  onBeforeMount(() => {
    makeItHappen.value = textSplitterIntoChar(makeItHappen.value);
  });
  onMounted(() => {
    animateSplitText(
      '#make-it-happen .letters',
      '#make-it-happen',
      1.5,
      0.01,
      0,
    );
  });
</script>

<style>
  .lottie-animation-container {
    height: 100% !important;
  }
  .lottie-animation-container svg {
    height: 100px !important;
    width: fit-content !important;
    margin: -10px -30px !important;
    padding: 0 !important;
  }

  .lottie-animation-container {
    --lottie-animation-container-width: fit-content !important;
    --lottie-animation-container-height: 0% !important;
  }
</style>
