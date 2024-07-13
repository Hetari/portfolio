<template>
  <section
    id="services"
    class="padding-x relative z-20 min-h-screen w-full overflow-x-clip rounded-t-3xl bg-[#0B0B0A] py-[5%]"
  >
    <h1
      id="what-i-do"
      v-html="whatIDo"
      class="text-flax-smoke-50 font-fancy text-4xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    ></h1>

    <div
      class="text-flax-smoke-300 mt-14 flex items-center justify-end gap-[5%]"
    >
      <p class="text-flax-smoke-300/85 self-start text-2xl">( SERVICES )</p>
      <p class="w-1/3 self-start text-3xl font-semibold text-fancy">
        My obsession is to craft memorable digital experiences that represent
        your brand, serve a meaningful purpose, and drive tangible business
        results.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitter } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const whatIDo = ref('What I do /');

  onBeforeMount(() => {
    whatIDo.value = textSplitter('What I do /');
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', 1, 0.05, 0);
  });
</script>
