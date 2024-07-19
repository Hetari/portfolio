<template>
  <!-- overflow-x-clip  -->
  <section
    id="services"
    class="padding-x relative rounded-t-3xl bg-[#0B0B0A] py-[5%] text-flax-smoke-200"
  >
    <div class="flex w-full flex-col">
      <h1
        id="what-i-do"
        v-html="whatIDo"
        class="text-[calc(3.125rem_+_((1vw_-_6.4px)_*_6.0938))] font-extrabold uppercase"
      ></h1>

      <div
        class="grid-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 lg:grid"
      >
        <p
          class="col-start-0 col-span-4 text-nowrap text-center text-[calc(1rem_+_((1vw_-_6.4px)_*_0.625))] text-flax-smoke-300/85 md:col-start-4"
        >
          ( SERVICES )
        </p>
        <p
          class="text-fancy col-span-8 w-full text-balance text-[calc(1.375rem+_((1vw_-_6.4px)_*_0.7813))] sm:font-semibold md:col-span-5"
        >
          My obsession is to craft memorable digital experiences that represent
          your brand, serve a meaningful purpose, and drive tangible business
          results.
        </p>
      </div>
    </div>
    <!--  pb-10 md:pb-[3%] 3xl:pb-[5%] items-end justify-end -->

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="flex flex-col justify-between gap-y-16">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :class="getCardClass(index)"
        />
        <!-- 
        <ServicesCard
          class="sticky top-[calc(5.75rem_+_20vh)] mb-[11.5rem] border-t border-flax-smoke-500/50 bg-[#0B0B0A] lg:top-[calc(8rem_+_10vh)] lg:mb-[16rem]"
        />

        <ServicesCard
          class="sticky top-[calc(11.5rem_+_20vh)] mb-[5.75rem] border-t border-flax-smoke-500/50 bg-[#0B0B0A] lg:top-[calc(16rem_+_10vh)] lg:mb-[8rem]"
        /> -->
      </div>
    </div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitter } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  const whatIDo = ref('What I do /');

  const servicesCardProps = [
    {
      title: 'Web Development',
      body: 'I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.',
      headings: ['Modern Code', 'Motion & Animations', 'SEO Optimized'],
    },
    {
      title: 'Problem Solver',
      body: 'I tackle complex technical or business challenges and provide innovative solutions to help streamline your processes and overcome obstacles.',
      headings: [
        'Creative Solutions',
        'Automation & Scripting',
        'Efficiency Improvement',
      ],
    },
    {
      title: 'Customer Experience Enhancement',
      body: 'I improve how your customers interact with your business through better service design, feedback systems, and user journey optimization.',
      headings: [
        'Service Design',
        'Feedback Systems',
        'User Journey Optimization',
      ],
    },
  ];

  const getCardClass = (index: number) => {
    const baseClasses = 'sticky border-t border-flax-smoke-500/50 bg-[#0B0B0A]';

    const topSmallScreen = [
      'top-[calc(0rem_+_20vh)]',
      'top-[calc(5.75rem_+_20vh)]',
      'top-[calc(11.5rem_+_20vh)]',
    ];

    const topLargeScreen = [
      `lg:top-[calc(${index * 8}rem_+_10vh)]`,
      `lg:top-[calc(${index * 8}rem_+_10vh)]`,
      `lg:top-[calc(${index * 8}rem_+_10vh)]`,
    ];

    const mbSmallScreen = ['mb-[17.25rem]', 'mb-[11.5rem]', 'mb-[5.75rem]'];
    const mbLargeScreen = ['lg:mb-[24rem]', 'lg:mb-[16rem]', 'lg:mb-[8rem]'];

    return `${baseClasses} ${topSmallScreen[index]} ${mbSmallScreen[index]} ${topLargeScreen[index]} ${mbLargeScreen[index]}`;
  };

  onBeforeMount(() => {
    whatIDo.value = textSplitter('What I do /', true);
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', 0.7, 0.01, 0);
  });
</script>
