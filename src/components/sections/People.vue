<template>
  <!-- common-padding  -->
  <section id="people-section" class="common-padding mx-auto min-h-svh py-0">
    <div
      class="grid w-full grid-cols-12 border-b-[1px] border-flax-smoke-300 pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h1
        class="heading-1 max-sm:heading-2 col-span-full font-bold uppercase leading-none text-flax-smoke-950"
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

    <Slider />
  </section>
</template>

<script setup lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';
  import { onMounted, onUpdated } from 'vue';
  import { Slider } from '../design';

  gsap.registerPlugin(ScrollTrigger);

  const animatePeopleSectionLeave = (id: string) => {
    gsap.set(id, {
      yPercent: -50,
    });

    gsap.to(id, {
      scrollTrigger: {
        trigger: id,
        start: 'top 75%',
        end: 'bottom center',
        scrub: true,
      },
      ease: 'power1',
      yPercent: 0,
    });
  };
  onMounted(() => {
    animatePeopleSectionLeave('#people-section');
  });
  onUpdated(() => {
    animatePeopleSectionLeave('#people-section');
  });
</script>
