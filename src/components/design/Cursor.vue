<template>
  <div class="invisible hidden md:visible md:block">
    <div
      id="cursor"
      class="fixed z-[9999999] hidden h-10 w-24 origin-center scale-100 rounded-md bg-flax-smoke-500 opacity-100 md:block"
    >
      <div id="cursor-text" class="ml-1.5 mt-1.5 flex text-flax-smoke-50">
        <div
          class="size-7 rounded-sm bg-flax-smoke-100 text-center text-flax-smoke-900"
        >
          ⮡
        </div>
        <p class="flex-center ml-2">show</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import gsap from 'gsap';
  import { onMounted, ref } from 'vue';

  // Track the previous Y positions
  const prevY = ref(0);

  onMounted(() => {
    const cursor = document.getElementById('cursor') as HTMLDivElement;
    const cursorText = document.getElementById('cursor-text') as HTMLDivElement;

    const xCursorTo = gsap.quickTo(cursor, 'x', {
      duration: 0.5,
      ease: 'power4',
    });
    const yCursorTo = gsap.quickTo(cursor, 'y', {
      duration: 0.5,
      ease: 'power4',
    });

    const xTextTo = gsap.quickTo(cursorText, 'x', {
      duration: 0.5,
      ease: 'power4',
    });
    const yTextTo = gsap.quickTo(cursorText, 'y', {
      duration: 0.5,
      ease: 'power4',
    });

    const { width, height, left, top } = cursor.getBoundingClientRect();

    document.addEventListener('mousemove', (e) => {
      xCursorTo(e.clientX + 32);
      yCursorTo(e.clientY + 32);

      const isMovingDown = e.clientY > prevY.value;
      const scaleFactor = isMovingDown ? 0.7 : -0.7;

      prevY.value = e.clientY;

      const newX = ((e.clientX - left) / width - 0.5) * scaleFactor;
      const newY = ((e.clientY - top) / height - 0.5) * scaleFactor;

      xTextTo(newX);
      yTextTo(newY);
    });
  });
</script>
