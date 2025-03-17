<template>
  <section
    id="marquee-section"
    class="text-flax-smoke-200 relative mb-60 h-fit w-full overflow-clip leading-none"
    style="height: clamp(3.5rem, 2.3571rem + 8.5143vw, 10.5rem)"
  >
    <div id="marquee-1" class="flex" role="marquee">
      <h4
        v-for="i in 3"
        :key="`marquee1-${i}`"
        class="heading-1 sm:heading-1 flex items-center font-bold text-nowrap whitespace-nowrap"
      >
        Full Stack Developer
        <div class="w-fit sm:mx-10 sm:scale-75">
          <component :is="icons[(i - 1) % icons.length]" />
        </div>
      </h4>
    </div>
    <div id="marquee-2" class="flex" role="marquee">
      <h4
        v-for="i in 3"
        :key="`marquee2-${i}`"
        class="heading-1 sm:heading-1 flex items-center font-bold text-nowrap whitespace-nowrap"
      >
        Full Stack Developer
        <div class="w-fit sm:mx-10 sm:scale-75">
          <component :is="icons[(i - 1) % icons.length]" />
        </div>
      </h4>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Star4 from '@/components/design/icons/Star4.vue';
  import Star8 from '@/components/design/icons/Star8.vue';
  import Arrow from '@/components/design/icons/Arrow.vue';
  import gsap from 'gsap';
  import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
  import { onMounted } from 'vue';
  // @ts-expect-error: No defs provided
  import { horizontalLoop } from './horizontal-loop.js';

  const icons = [Star4, Arrow, Star8];

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  onMounted(() => {
    // Initialize horizontal loops
    const marquee1 = gsap.utils.toArray('#marquee-1 h4');
    const marquee2 = gsap.utils.toArray('#marquee-2 h4');

    // Horizontal loop for marquee-1 (original direction)
    horizontalLoop(marquee1, {
      xPercent: -100,
      repeat: -1,
      speed: 0.7,
    });

    // Horizontal loop for marquee-2 (opposite direction)
    horizontalLoop(marquee2, {
      xPercent: 100,
      repeat: -1,
      speed: 0.7,
      reversed: true,
    });

    // Create scroll-triggered animations
    gsap.timeline({
      scrollTrigger: {
        trigger: '#marquee-section',
        start: 'top center',
        end: 'top top',
        onEnter: () => {
          initMarqueeAnimations();
        },
        onLeaveBack: () => {
          resetMarqueeAnimations();
        },
      },
    });

    function initMarqueeAnimations() {
      // Animate marquee-1 upwards
      gsap.to('#marquee-1', {
        y: -100,
        duration: 1,
        ease: 'power2.inOut',
      });

      // Animate marquee-2 downwards
      gsap.to('#marquee-2', {
        y: -90,
        duration: 1,
        ease: 'power2.inOut',
      });
    }

    function resetMarqueeAnimations() {
      // Reset marquee-1 position
      gsap.to('#marquee-1', {
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
      });

      // Reset marquee-2 position
      gsap.to('#marquee-2', {
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  });
</script>
