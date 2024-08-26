<template>
  <div class="mt-[10vh] grid h-[50svh] w-full grid-cols-2 gap-2">
    <div class="relative flex h-full flex-col">
      <div>
        <p class="heading-4 mb-14 max-w-[35ch] font-semibold leading-none">
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          dolorem commodi nihil maxime odit reiciendis, architecto repudiandae
          qui?"
        </p>
        <div class="heading-6 mb-6 font-semibold">
          <p class="">Author here</p>
          <p class="text-flax-smoke-400">Founder of</p>
        </div>
        <div class="flex gap-3">
          <p
            class="rounded-full border border-flax-smoke-500 px-3 uppercase text-flax-smoke-600"
            v-for="i in 3"
            :key="i"
          >
            Tag {{ i }}
          </p>
        </div>
      </div>

      <div class="flex h-full items-end justify-end">
        <div class="flex gap-3">
          <Button label="Prev" url="" />
          <Button label="Next" url="" />
        </div>
      </div>
    </div>

    <div class="flex-center w-full">
      <div class="relative">
        <img
          class="aspect-[1/1.2] rounded-lg object-cover object-top mix-blend-screen brightness-90 grayscale"
          :src="profile"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { profile } from '@/assets/images';
  import { Button } from '../common';
</script>
