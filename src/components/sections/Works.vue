<template>
  <section id="works" class="common-padding mb-20">
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
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold md:col-span-5"
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
          class="relative col-span-12 flex flex-col space-y-10 md:col-span-7"
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
                <div class="z-10 aspect-[4/3] w-full overflow-clip rounded-lg">
                  <!-- <mux-player
                    player-software-name="mux-player-react"
                    player-software-version="2.6.0"
                    autoplay="muted"
                    loop=""
                    style="aspect-ratio: 1.33333 / 1"
                    muted=""
                    placeholder='data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAQCdASoQAAwAAQAcJZQCdAD2OIK6tBAA/v7Q/Jt96+8CX91jIVXK1r0d3dTs2ZvVROrm+mWf9WmqP2ulay9OSo9vF4933zbWo4f7GcTMmtrLIZ/ZT9s4xGd8oOwQHQRw7tQVdFKC8EuWcRRi7DwS5vDR6QKAAAA="/></g></svg>'
                    class="h-full"
                    playsinline=""
                    preload="none"
                    playback-id="aTY8U3ElkRCjIQx5mHYXL02lAcdiOYdEKEKMkkTvjWR4"
                  ></mux-player> -->
                </div>
              </div>
              <!-- <div
                class="gap-y-space-sm pt-space-xs @lg:flex-row flex flex-col justify-between"
              >
                <div class="gap-y-space-3xs flex flex-col">
                  <span
                    class="text-base-small text-secondary-50 font-mono font-medium"
                    >Technology &amp; Arts</span
                  >
                  <h3
                    class="text-heading-3 text-accent-400 w-fit font-semibold"
                  >
                    SOGAI™
                  </h3>
                </div>
                <div
                  class="gap-x-space-3xs tracking-base text-secondary-50 flex items-end"
                >
                  <span class="tag">Design</span
                  ><span class="tag">Development</span
                  ><span
                    class="tag border-secondary-50 bg-secondary-50 text-secondary-400"
                    >2024</span
                  >
                </div>
              </div> -->
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
  import { workBg1, workBg2, workBg3, workBg4 } from '@/assets/images';

  const index = ref(0);
  const selectedWorks = ref('Selected Works /');
  const selectedWorksProps = [
    {
      imageBg: workBg1,
    },
    {
      imageBg: workBg2,
    },
    {
      imageBg: workBg3,
    },
    {
      imageBg: workBg4,
    },
    // {
    //   id: 0,
    //   name: 'Pyutube',
    //   category: 'CLI Tool & Cross Platform',
    //   tags: ['Python', 'CLI Tool', 'Youtube'],
    //   videoSrc: work1,
    //   url: 'https://github.com/hetari/pyutube',
    // },
    // {
    //   id: 1,
    //   name: 'Pyutube 2',
    //   category: 'CLI Tool & Cross Platform',
    //   tags: ['Python', 'CLI Tool', 'Youtube'],
    //   videoSrc: work1,
    //   url: 'https://github.com/hetari/pyutube',
    // },
  ];

  const formattedWorks = computed(() => {
    return `${selectedWorks.value} <span class="inline-block text-flax-smoke-400 text-opacity-50 w-4/5 hidden sm:block text-end">( ${selectedWorksProps.length} )</span>`;
  });

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (index: any, selectedWorksProps: any[]) => {
    const tl = gsap.timeline({ defaults: { duration: 0.25 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(index.value + 1, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.25,
      ease: 'power2.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.25 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(index.value - 1, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.25,
      ease: 'power2.inOut',
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

    // Apply GSAP animations to each div and add it to the master timeline
    // Apply GSAP animations to each div
    gsap.utils.toArray('.work-card').forEach((div: any) => {
      gsap.timeline({ defaults: { duration: 0.5 } }).to(div, {
        scrollTrigger: {
          trigger: div, // target each div individually
          start: 'top 40%',
          end: 'bottom 40%',
          scrub: 1,
          markers: true,
          onLeaveBack: () => {
            // Backward scroll animation
            if (index.value !== 0) {
              gsap.to('#index', {
                yPercent: 100,
                duration: 0.25,
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
              duration: 0.25,
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
