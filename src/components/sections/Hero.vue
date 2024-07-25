<template>
  <section class="padding-x mb-[-100svh] min-h-svh py-0">
    <Navbar @isLocked="LockeScroll" />

    <div
      id="hero"
      class="sticky top-[10svh] flex h-[92svh] w-full flex-col items-center justify-end pb-10 md:pb-[3%] 3xl:pb-[1.5%]"
    >
      <div class="w-full items-end overflow-clip">
        <div id="my-name" class="flex w-full translate-y-full items-start">
          <MyName />
          <Star class="hide-on-mobile" />
        </div>
      </div>

      <div class="column-gap spacing-t grid w-full grid-cols-12 flex-col">
        <!-- relative z-10 -->

        <!--  -->
        <div
          id="profile-container"
          class="col-span-3 select-none flex-col rounded-lg md:flex"
        >
          <div class="overlay absolute inset-0 z-[2] bg-flax-smoke-50"></div>
          <img
            id="profile-img"
            :src="profile"
            alt="Ebrahhem profile"
            decoding="async"
            class="size-full scale-90 rounded-lg object-cover object-top brightness-110 grayscale"
          />
        </div>

        <!-- 
        <div
          class="col-span-8 col-start-5 flex flex-col justify-between gap-y-12 sm:gap-y-6 lg:gap-y-24"
        >
          <div class="column-gap flex items-center justify-between">
            <ModernArtShape
              id="art"
              class="w-16 flex-shrink-0 scale-0 opacity-0 sm:block sm:w-20 md:w-32 xl:w-40 2xl:w-56 3xl:w-60"
            />

            <p class="sr-only">
              A freelance full-stack developer, cutting-edge technologies to
              deliver comprehensive solutions for your business.
            </p>

            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i text-fluid-body max-w-[30ch] overflow-clip text-balance font-medium leading-snug lg:text-start"
            ></p>
          </div>

          <div
            id="location"
            class="column-gap flex scale-0 items-start justify-between text-flax-smoke-950 opacity-0"
          >
            <div class="text-sm font-normal">
              <p class="font-fancy">{{ locationPlace }}</p>
              <p class="font-fancy">{{ locationCountry }}</p>
            </div>
            <p class="animate-pulse font-fancy text-sm">
              SCROLL FOR MORE
              <span
                class="inline-block font-fancy motion-safe:animate-[bounce_2s_infinite]"
                >↓</span
              >
            </p>
          </div>
        </div> -->
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { MyName, Star, ModernArtShape } from '../design';
  import { Navbar } from '@/components/common';
  import { profile } from '@/assets/images';
  import { heroText, locationCountry, locationPlace } from '@/data';
  import { textSplitter } from '@/functions';
  import { lenis } from '@/main';

  const whoAmI = ref(heroText);

  const LockeScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  onBeforeMount(() => {
    whoAmI.value = textSplitter(whoAmI.value);
  });
</script>
