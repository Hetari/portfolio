<template>
  <div class="invisible relative z-99999999 hidden md:visible md:block">
    <div
      id="cursor"
      class="fixed z-100 h-[2.5rem] w-[6rem] origin-center scale-0 rounded-md bg-flax-smoke-500 opacity-0"
    ></div>

    <div
      id="inner"
      class="fixed left-1.5 top-1.5 z-101 flex scale-0 object-center text-flax-smoke-50 opacity-0"
    >
      <div
        class="flex-center size-7 rounded-xs bg-flax-smoke-200 text-flax-smoke-900"
      >
        ⮡
      </div>
      <p class="pl-3.5 pt-0.5">view</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import gsap from 'gsap';
  import { onMounted } from 'vue';

  onMounted(() => {
    const cursor = document.getElementById('cursor') as HTMLDivElement;
    const inner = document.getElementById('inner') as HTMLDivElement;

    const innerX = gsap.quickTo(inner, 'x', {
      duration: 0.65,
      ease: 'power4',
    });
    const innerY = gsap.quickTo(inner, 'y', {
      duration: 0.65,
      ease: 'power4',
    });

    const xCursorTo = gsap.quickTo(cursor, 'x', {
      duration: 0.5,
      ease: 'power4',
    });
    const yCursorTo = gsap.quickTo(cursor, 'y', {
      duration: 0.5,
      ease: 'power4',
    });

    document.addEventListener('mousemove', (e) => {
      xCursorTo(e.clientX + 32);
      yCursorTo(e.clientY + 32);

      innerX(e.clientX + 32);
      innerY(e.clientY + 32);
    });
  });
</script>
