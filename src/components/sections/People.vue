<template>
  <!-- common-padding  -->
  <section
    id="testimonials-section"
    class="common-padding relative mx-auto min-h-svh -translate-y-0 overflow-y-clip py-0 will-change-transform"
  >
    <div
      class="grid w-full grid-cols-12 border-b-[1px] border-flax-smoke-300 pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h1
        class="heading-1 max-sm:heading-2 col-span-full font-bold uppercase leading-none text-flax-smoke-950 will-change-auto"
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
        <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
          Here's what my clients say about our collaboration. Their satisfaction
          and meeting expectations are my top priorities, ensuring the best
          experience possible.
        </p>
      </div>
    </div>

    <Slider />
  </section>
</template>

<script setup lang="ts">
  // import gsap from 'gsap';
  // import { ScrollTrigger } from 'gsap/all';
  // import { onMounted } from 'vue';
  import { Slider } from '../design';

  // gsap.registerPlugin(ScrollTrigger);

  // const animatePeopleSectionLeave = (id: string) => {
  //   gsap.to(id, {
  //     scrollTrigger: {
  //       trigger: id,
  //       markers: true,
  //       start: 'top 80%',
  //       end: '100% end',
  //     },
  //     duration: 0.7,
  //     y: '0',
  //   });
  // };
  // onMounted(() => {
  //   animatePeopleSectionLeave('#testimonials-section');
  // });
</script>
