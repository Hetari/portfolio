<template>
  <section
    id="services"
    class="padding-x relative z-20 min-h-screen w-full overflow-x-clip rounded-t-3xl bg-[#0B0B0A] py-[5%]"
  >
    <h1
      id="what-i-do"
      v-html="whatIDo"
      class="font-fancy text-[calc(3.125rem_+_((1vw_-_6.4px)_*_6.0938))] font-extrabold uppercase text-flax-smoke-50"
    ></h1>

    <div class="mt-14 flex justify-end gap-[5%] text-flax-smoke-300">
      <p
        class="text-nowrap text-end text-[calc(1rem_+_((1vw_-_6.4px)_*_0.625))] text-flax-smoke-300/85"
      >
        ( SERVICES )
      </p>
      <p
        class="text-fancy w-full text-balance text-[calc(1.375rem+_((1vw_-_6.4px)_*_0.7813))] sm:w-2/5 sm:font-semibold"
      >
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
    animateSplitText('#what-i-do .letters', 0.7, 0.01, 0);
  });
</script>
