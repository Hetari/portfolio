<template>
  <div
    id="loading-screen"
    class="flex-center fixed bottom-0 z-[99999] size-full cursor-wait"
  >
    <div v-if="width > 0" class="size-full flex-col">
      <svg
        class="absolute top-0 z-0 h-[calc(100%_+_300px)] w-full fill-tertiary-dark brightness-75"
      >
        <path ref="path" :d="pathData"></path>
      </svg>
      <p
        id="text"
        style="transform: translateZ(0px)"
        class="flex-center z-[1] size-full text-center text-[42px] text-primary opacity-0"
        :class="{ ' ': index === words.length - 1 }"
      >
        <!-- <span class="mr-[10px] block size-[10px] rounded-full bg-primary" /> -->
        {{ words[index] }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { onMounted, Ref, ref, watch } from 'vue';
  import { animateLoadingPath, animateLoadingText } from '@/animations';

  const index = ref(-1);
  const pathData = ref('');
  const path = ref<SVGPathElement>();

  const { width, height } = useWindowSize();
  const initialPath = `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value + 300} 0 ${height.value}  L0 0`;

  onMounted(() => {
    index.value++;
    pathData.value = initialPath;
    animateLoadingText(index.value);
  });

  watch(index, (newVal) => {
    if (newVal === words.length - 1) {
      animateLoadingPath(width, height, path as Ref<SVGPathElement>);
      return;
    }

    setTimeout(
      () => {
        index.value = newVal + 1;
        animateLoadingText(index.value);
      },
      index.value == 0 ? 1000 : 150,
    );
  });

  const words = [
    'Hello', // English
    'Bonjour', // French
    'Ciao', // Italian
    'やあ', // Japanese
    'Guten tag', // German
    'Salam', // Malay/Indonesian
    'Merhaba', // Turkish
    'ًمرحبا', // Arabic
  ];
</script>
