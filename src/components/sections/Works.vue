<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h1
        id="selectedWorks"
        v-html="selectedWorks"
        class="heading-1 text-start uppercase leading-none"
      ></h1>
      <p
        class="heading-1 hidden w-4/5 text-end font-extrabold text-flax-smoke-400 text-opacity-50 sm:block"
      >
        ( {{ selectedWorksProps.length }} )
      </p>

      <div
        id="selected-works-text"
        class="md:column-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 opacity-0 lg:grid"
      >
        <p
          class="heading-6 col-span-4 text-nowrap text-center text-flax-smoke-300/85 lg:col-start-2"
        >
          (
          <span class="inline sm:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Featured client projects that have been meticulously crafted with
          passion and purpose over the years.
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div
        id="works-grid"
        class="column-gap pt-space-lg grid h-full grid-cols-12"
      >
        <div
          class="sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-flax-smoke-100 md:flex"
        >
          <span class="relative">0</span>
          <span id="index" class="relative">{{ index + 1 }}.</span>
        </div>
        <aside
          class="relative col-span-full flex flex-col space-y-10 md:col-span-7"
        >
          <div
            v-for="(work, i) in selectedWorksProps"
            :key="i"
            class="@container work-card"
          >
            <a class="group" target="_blank" href="#">
              <div
                class="flex-center relative aspect-square overflow-clip rounded-md"
              >
                <img
                  alt="background"
                  loading="lazy"
                  class="absolute h-full w-full object-cover"
                  style="color: transparent"
                  :src="work.imageBg"
                />
                <div
                  class="flex-center z-10 aspect-[4/3] size-full overflow-clip rounded-lg"
                >
                  <video :src="work.videoSrc" autoplay loop></video>
                </div>
              </div>
              <!-- TODO: Add the rest of loop -->
            </a>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { work1 } from '@/assets/videos';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import { workBg1 } from '@/assets/images';
  import { useWindowSize } from '@vueuse/core';

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('Selected Works /');
  const selectedWorksProps = [
    {
      id: 0,
      name: 'Pyutube',
      category: 'CLI Tool & Cross Platform',
      tags: ['Python', 'CLI Tool', 'Youtube'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://github.com/hetari/pyutube',
    },
    {
      id: 1,
      name: 'Pyutube 2',
      category: 'CLI Tool & Cross Platform',
      tags: ['Python', 'CLI Tool', 'Youtube'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://github.com/hetari/pyutube',
    },

    {
      id: 2,
      name: 'Pyutube 2',
      category: 'CLI Tool & Cross Platform',
      tags: ['Python', 'CLI Tool', 'Youtube'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://github.com/hetari/pyutube',
    },
    {
      id: 1,
      name: 'Pyutube 2',
      category: 'CLI Tool & Cross Platform',
      tags: ['Python', 'CLI Tool', 'Youtube'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://github.com/hetari/pyutube',
    },
  ];

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (index: any, selectedWorksProps: any[]) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(index.value + 1, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(index.value - 1, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

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

    // Apply GSAP animations to each div
    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            // start: 'top 40%',
            start: 'top 10%',
            // end: 'bottom 40%',
            end: 'bottom 10%',
            scrub: 0.1,
            markers: true,
            onLeaveBack: () => {
              // Backward scroll animation
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            // Forward scroll animation
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
