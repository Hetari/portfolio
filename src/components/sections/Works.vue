<template>
  <section id="works" class="mb-20">
    <div class="flex w-full flex-col">
      <h1
        id="selectedWorks"
        v-html="formattedWorks"
        class="heading-1 font-extrabold uppercase"
      ></h1>

      <div
        id="selected-works-text"
        class="grid-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 opacity-0 lg:grid"
      >
        <p
          class="col-start-0 heading-6 col-span-4 text-nowrap text-center text-flax-smoke-300/85 md:col-start-4"
        >
          (
          <span class="inline sm:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>
        <p
          class="heading-4 col-span-8 w-full text-balance font-fancy sm:font-semibold md:col-span-5"
        >
          Featured client projects that have been meticulously crafted with
          passion and purpose over the years.
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="flex flex-col justify-between gap-y-16">
        <!-- TODO: add works here -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref } from 'vue';

  const selectedWorks = ref('Selected Works /');
  const selectedWorksProps = [{}, {}, {}, {}];

  const formattedWorks = computed(() => {
    return `${selectedWorks.value} <span class="inline-block text-flax-smoke-400 text-opacity-50 w-4/5 hidden sm:block text-end">( ${selectedWorksProps.length} )</span>`;
  });

  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('Selected Works / ', true);
  });

  onMounted(() => {
    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
