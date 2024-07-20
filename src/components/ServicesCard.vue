<template>
  <div class="text-[calc(2rem_+_((1vw_-_6.4px)_*_3.75))]">
    <div
      class="flex items-center justify-between gap-x-4 py-7 sm:py-6 md:gap-x-6 md:py-5 3xl:py-6"
    >
      <h3 class="text-left font-extrabold">
        {{ title }}
      </h3>

      <div
        class="size-[calc(2rem_+_((1vw_-_6.4px)_*_3.75))] scale-75 fill-flax-smoke-500/50"
        v-html="shape"
      ></div>
    </div>
    <p
      class="text-fancy w-5/6 text-[calc(1.375rem+_((1vw_-_6.4px)_*_0.7813))] text-flax-smoke-300 sm:font-semibold"
    >
      {{ body }}
    </p>

    <div class="mt-12 font-extrabold">
      <div v-for="(heading, index) in headings" :key="index">
        <h3 :class="getClass(index)">{{ heading }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    headings: {
      type: Array as () => string[],
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
  });

  const getClass = (index: number) => {
    return index === 1 ? 'py-4 border-y border-flax-smoke-500/50' : '';
  };
</script>
