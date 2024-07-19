<template>
  <div class="text-[calc(2rem_+_((1vw_-_6.4px)_*_3.75))]">
    <div class="flex items-center justify-between gap-x-4 md:gap-x-6">
      <h3 class="py-7 text-left font-extrabold sm:py-6 md:py-5 3xl:py-6">
        {{ title }}
      </h3>

      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        class="size-10"
        alt="fake"
      />
    </div>
    <p
      class="text-fancy w-5/6 text-[calc(1rem_+_((1vw_-_6.4px)_*_0.8813))] text-flax-smoke-300 sm:font-semibold"
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
  });

  const getClass = (index: number) => {
    return index === 1 ? 'py-4 border-y border-flax-smoke-500/50' : '';
  };
</script>
