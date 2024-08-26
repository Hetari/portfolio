<template>
  <!-- common-padding  -->
  <section
    class="common-padding absolute -bottom-1/2 top-0 z-[-1] mb-[-100svh] w-full py-0"
  >
    <div
      class="sticky top-10 grid w-full grid-cols-12 pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h1
        class="heading-1 col-span-full font-bold uppercase leading-none text-flax-smoke-950"
      >
        Don't take my <br />
        word for it /
      </h1>
      <div
        class="col-span-full mt-[5%] flex justify-end gap-10 text-flax-smoke-800 sm:gap-20 lg:col-span-10"
      >
        <p class="heading-6 text-nowrap text-center uppercase">
          ( Testimonials )
        </p>
        <p class="text-fancy heading-6 w-full text-balance sm:max-w-[40ch]">
          Here's what my clients say about our collaboration. Their satisfaction
          and meeting expectations are my top priorities, ensuring the best
          experience possible.
        </p>
      </div>
    </div>
  </section>
  <div class="h-screen"></div>
</template>

<script setup lang="ts">
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { animateSplitText } from '@/animations';

  const title = ref('');

  // onBeforeMount(() => {
  //   title.value = textSplitterIntoChar(title.value);
  // });

  // onMounted(() => {
  //   animateSplitText('#people .letters', '#people-text', 0.7, 0.01, 0);
  // });
</script>
