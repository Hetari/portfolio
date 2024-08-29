<template>
  <!-- TODO: [ ] Animations -->
  <div
    id="slider"
    class="column-gap relative mt-[10%] grid w-full grid-cols-12 gap-2 max-md:min-h-svh lg:h-[85svh]"
  >
    <!-- For larger devices, show one person at a time with index -->
    <template v-if="!isSmallScreen">
      <div
        class="columns-gap relative col-span-full flex flex-col max-lg:h-fit lg:col-span-6 lg:h-full"
      >
        <div>
          <p
            class="quote heading-3 mb-14 min-h-36 max-w-[30ch] font-semibold md:min-h-fit md:max-w-full md:leading-none lg:min-h-36 lg:max-w-[30ch] lg:leading-normal"
          >
            " {{ people[index].quote }} "
          </p>
          <div class="heading-6 mb-6 font-semibold">
            <p>{{ people[index].author }}</p>
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

        <div class="relative flex h-full items-end justify-between">
          <div class="heading-5 flex w-2/12 items-center gap-3">
            <p>{{ index + 1 }}</p>
            <p class="h-0.5 w-full bg-black"></p>
            <p>{{ people.length }}</p>
          </div>
          <div
            class="lg:absolute lg:inset-0 lg:-bottom-10 lg:w-full lg:will-change-scroll"
          >
            <div class="sticky top-[90%] flex place-content-end gap-3">
              <Button label="Prev" @click="clickPrev" />
              <Button label="Next" @click="clickNext" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="columns-gap order-first col-span-full flex h-[60vh] w-full items-start justify-center max-sm:order-last lg:order-last lg:col-span-6 lg:h-full"
      >
        <img
          class="h-full w-full rounded-lg object-cover object-center mix-blend-screen brightness-90 grayscale lg:h-[85svh]"
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
                  class="aspect-square size-full rounded-md object-cover object-center mix-blend-screen brightness-90 grayscale"
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
  import { esmail, mohammad } from '@/assets/images';
  import { Button } from '../common';
  import { computed, onMounted, ref } from 'vue';
  import { useWindowSize } from '@vueuse/core';

  const { width } = useWindowSize();
  const isSmallScreen = computed(() => width.value < 640);

  const clickNext = () => {
    index.value = (index.value + 1) % people.length;
  };
  const clickPrev = () => {
    index.value = (index.value - 1 + people.length) % people.length;
  };

  onMounted(() => {});

  // data
  const index = ref(0);
  const people = [
    {
      quote:
        'Working with Ebraheem on the Axon website has been an exceptional experience. His invaluable support and dedication were crucial in bringing this project to life. Thank you, Ebraheem!',
      author: 'Esmail Atta',
      position: 'Founder of Axon',
      tags: ['Web Development', 'SEO'],
      profile: esmail,
    },
    {
      quote:
        'Collaborating with Hetari on multiple projects has been a true pleasure. His exceptional skills, attention to detail, and commitment to quality consistently made him an invaluable asset to the team.',
      author: 'Mohammad AL-Sulami',
      position: 'Full Stack Developer',
      tags: ['Web Development', 'Animation', 'UI/UX'],
      profile: mohammad,
    },
  ];
</script>
