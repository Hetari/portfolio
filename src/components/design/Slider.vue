<template>
  <div class="mt-[10vh] grid h-[50svh] w-full grid-cols-2 gap-2">
    <div class="relative flex h-full flex-col">
      <div>
        <p class="heading-4 mb-14 max-w-[35ch] font-semibold leading-none">
          {{ people[index].quote }}
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

      <div class="flex h-full items-end justify-end">
        <div class="flex gap-3">
          <Button label="Prev" @click="clickPrev" />
          <Button label="Next" @click="clickNext" />
        </div>
      </div>
    </div>

    <div class="flex-center w-full">
      <div class="relative">
        <img
          class="aspect-[1/1.2] rounded-lg object-cover object-top mix-blend-screen brightness-90 grayscale"
          :src="people[index].profile"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { profile, profile2 } from '@/assets/images';
  import { Button } from '../common';
  import { ref } from 'vue';

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

  const clickNext = () => {
    index.value = (index.value + 1) % people.length;
  };
  const clickPrev = () => {
    index.value = (index.value - 1 + people.length) % people.length;
  };
</script>
