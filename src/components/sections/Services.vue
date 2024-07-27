<template>
  <section id="services" class="mb-20">
    <div class="flex w-full flex-col">
      <h1
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold uppercase"
      ></h1>

      <div
        id="services-text"
        class="grid-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 opacity-0 lg:grid"
      >
        <p
          class="col-start-0 heading-6 col-span-4 text-nowrap text-center text-flax-smoke-300/85 md:col-start-4"
        >
          ( SERVICES )
        </p>
        <p
          class="text-fancy heading-4 col-span-8 w-full text-balance sm:font-semibold md:col-span-5"
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
          v-for="card in servicesCardProps"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="sticky"
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
      shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
<path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
</svg>
`,
    },
    {
      title: 'Problem Solver',
      body: 'I tackle complex technical or business challenges and provide innovative solutions to help streamline your processes and overcome obstacles.',
      headings: [
        'Creative Solutions',
        'Automation & Scripting',
        'Efficiency Improvement',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
</svg>
`,
    },
    {
      title: 'Customer Experience Enhancement',
      body: 'I improve how your customers interact with your business through better service design, feedback systems, and user journey optimization.',
      headings: [
        'Service Design',
        'Feedback Systems',
        'User Journey Optimization',
      ],
      shape: `<svg  viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
<path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
</svg>
`,
    },
  ];

  const getCardClass = (index: number) => {
    // const baseClasses =
    //   ' sticky border-t border-flax-smoke-500/50 bg-[#0B0B0A]  ';
    // const topLargeScreen = [
    //   `lg:top-[calc(0rem_+_10vh)]`,
    //   `lg:top-[calc(8.5rem_+_10vh)]`,
    //   `lg:top-[calc(28rem_+_10vh)]`,
    // ];
    // const topSmallScreen = [
    //   'top-[calc(0rem_+_10vh)]',
    //   'top-[calc(5rem_+_10vh)]',
    //   'top-[calc(19rem_+_10vh)]',
    // ];
    // // const topMdScreen = [
    // //   'md:top-[calc(0rem_+_20vh)]',
    // //   'md:top-[calc(6rem_+_20vh)]',
    // //   'md:top-[calc(12rem_+_20vh)]',
    // // ];
    // const topMdScreen = [
    //   'md:top-[calc(0rem_+_20vh)]',
    //   'md:top-[calc(6rem_+_20vh)]',
    //   'md:top-[calc(14rem_+_20vh)]',
    // ];
    // const mbLargeScreen = [
    //   'lg:mb-[22rem] 3xl:mb-[25rem] 3xl:bg-red-500',
    //   'lg:mb-[17rem]',
    //   'lg:mb-[8rem]',
    // ];
    // // const mbMdScreen = ['md:mb-[10rem]', 'md:mb-[6rem]', 'md:mb-[0rem]'];
    // const mbMdScreen = ['md:mb-[10rem]', 'md:mb-[6rem]', 'md:mb-[0rem]'];
    // const mbSmallScreen = ['mb-[9.5rem]', 'mb-[7rem]', 'mb-[0rem]'];
    // return `${baseClasses}
    //   ${topMdScreen[index]}
    // ${mbMdScreen[index]}
    //  ${topSmallScreen[index]}
    //  ${mbSmallScreen[index]}
    // ${topLargeScreen[index]}
    //  ${mbLargeScreen[index]}
    //  `;
  };

  onBeforeMount(() => {
    whatIDo.value = textSplitter('What I do /', true);
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
  });
</script>
