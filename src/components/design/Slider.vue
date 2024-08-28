<template>
  <!-- TODO: [ ] Animations -->
  <div
    id="slider"
    class="mt-[10%] grid h-svh w-full grid-cols-12 gap-2 lg:h-[85vh]"
  >
    <!-- For larger devices, show one person at a time with index -->
    <template v-if="!isSmallScreen">
      <div
        class="columns-gap relative col-span-full flex h-fit flex-col lg:col-span-6 lg:h-full"
      >
        <div>
          <p
            class="heading-4 mb-14 min-h-36 max-w-[30ch] font-semibold leading-none"
          >
            "{{ people[index].quote }}"
          </p>
          <div class="heading-6 mb-6 font-semibold">
            <p class="">{{ people[index].author }}</p>
            <p class="text-flax-smoke-400">{{ people[index].position }}</p>
          </div>
          <div class="flex gap-3">
            <p
              class="rounded-full border border-flax-smoke-500 px-3 uppercase text-flax-smoke-600"
              v-for="i in people[index].tags"
              :key="i"
            >
              {{ i }}
            </p>
          </div>
        </div>

        <div
          class="relative mt-10 flex h-full items-end justify-between overflow-y-clip"
        >
          <div class="heading-5 flex w-2/12 items-center gap-3">
            <p>{{ index + 1 }}</p>
            <p class="h-0.5 w-full bg-black"></p>
            <p>{{ people.length }}</p>
          </div>
          <div
            class="lg:absolute lg:inset-y-0 lg:-bottom-8 lg:right-0 lg:h-[110%] lg:will-change-scroll"
          >
            <div class="sticky top-3/4 flex gap-3">
              <Button label="Prev" @click="clickPrev" />
              <Button label="Next" @click="clickNext" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex-center columns-gap order-first col-span-full h-[60vh] w-full max-sm:order-last lg:order-last lg:col-span-6 lg:h-full"
      >
        <img
          class="size-full rounded-lg object-cover object-center mix-blend-screen brightness-90 grayscale lg:h-[85vh]"
          :src="people[index].profile"
          alt=""
        />
      </div>
    </template>

    <!-- For smaller devices, show all people at once -->
    <template v-else>
      <div class="col-span-full">
        <template v-for="(p, i) in people" :key="i">
          <div class="mt-10 grid w-full grid-cols-4 items-start">
            <div
              class="columns-gap heading-2 relative col-span-1 flex h-full flex-col font-bold leading-none"
            >
              {{ (i + 1).toString().padStart(2, '0') }}
            </div>
            <div class="col-span-3">
              <div class="columns-gap flex w-full flex-col gap-y-4">
                <img
                  class="aspect-square size-full rounded-sm object-cover object-center mix-blend-screen brightness-90 grayscale"
                  :src="p.profile"
                  alt=""
                />

                <p
                  class="heading-4 mt-4 max-w-[25ch] font-semibold leading-none"
                >
                  " {{ p.quote }} "
                </p>

                <div class="heading-6 mt-4 font-semibold">
                  <p class="">{{ people[index].author }}</p>
                  <p class="text-flax-smoke-400">
                    {{ people[index].position }}
                  </p>
                </div>

                <div
                  class="flex max-w-60 flex-wrap gap-3 uppercase leading-[200%]"
                >
                  <p
                    class="text-nowrap rounded-full border border-flax-smoke-500 px-3 uppercase text-flax-smoke-600"
                    v-for="i in people[index].tags"
                    :key="i"
                  >
                    {{ i }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { profile, profile2 } from '@/assets/images';
  import { Button } from '../common';
  import { computed, ref } from 'vue';
  import { useWindowSize } from '@vueuse/core';

  const { width } = useWindowSize();

  const isSmallScreen = computed(() => width.value < 640);

  const clickNext = () => {
    index.value = (index.value + 1) % people.length;
  };
  const clickPrev = () => {
    index.value = (index.value - 1 + people.length) % people.length;
  };

  // data
  const index = ref(0);
  const people = [
    {
      quote:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolorem commodi nihil maxime odit reiciendis, architecto repudiandae qui?',
      author: 'Author 1',
      position: 'Founder of Company A',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      profile: profile,
    },
    {
      quote:
        'Another inspiring quote here. It is an example of dynamic content.',
      author: 'Author 2',
      position: 'CEO of Company B',
      tags: ['Tag A', 'Tag B', 'Tag C'],
      profile: profile2,
    },
  ];
</script>
