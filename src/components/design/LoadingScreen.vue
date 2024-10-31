<template>
  <div
    v-if="!isLoading"
    id="loading-screen"
    class="flex-center fixed bottom-0 z-[99999] size-full cursor-wait"
  >
    <div class="size-full flex-col">
      <svg
        :width="width"
        :height="height * 2"
        class="absolute top-0 z-0 h-[calc(100%_+_300px)] fill-flax-smoke-800 brightness-50"
      >
        <path ref="path" class="w-full" :d="pathData"></path>
      </svg>
      <div
        id="text"
        style="transform: translateZ(0px)"
        class="z-[1] flex size-full flex-col items-center justify-center text-center text-4xl font-bold text-flax-smoke-50/75 opacity-0 md:text-6xl"
        :class="{ 'text-4xl font-bold md:text-6xl': true }"
      >
        <h1 class="overflow-clip">
          <span
            class="loading-text inline-block translate-y-full will-change-auto"
          >
            Hetari
          </span>
        </h1>

        <p class="overflow-clip">
          <span
            class="loading-text inline-block translate-y-full opacity-70 will-change-auto"
          >
            &copy; Folio {{ new Date().getFullYear() }}
          </span>
        </p>

        <p class="heading-6 overflow-clip font-normal">
          <span
            class="loading-text absolute bottom-10 left-5 inline-block font-mono sm:left-14"
          >
            Version 1.3v
          </span>

          <span
            class="loading-text absolute bottom-10 right-5 inline-block animate-pulse font-mono sm:right-14"
          >
            Loading...
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { computed, onMounted, Ref, ref, watch } from 'vue';
  import {
    animateLoadingPath,
    animateLoadingText,
    animateLoadingTextContainer,
  } from '@/animations';

  const emit = defineEmits(['isLoading']);

  const isLoading = ref(false);
  const index = ref(-1);
  const pathData = ref('');
  const path = ref<SVGPathElement>();

  const { width, height } = useWindowSize();
  let curveHeight = computed(() => {
    // Default for larger screens
    let multiplier = 0.3;

    if (width.value < 600) {
      // Smaller multiplier for phones
      multiplier = 0.15;
    } else if (width.value < 900) {
      // Adjust for tablets or medium screens
      multiplier = 0.2;
    }

    // multiplier *= -1;
    return height.value + height.value * multiplier;
  });
  const initialPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${curveHeight.value} 0 ${height.value}  L0 0`,
  );
  const targetPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`,
  );

  const isSamsungBrowser = /samsung/i.test(navigator.userAgent);

  onMounted(() => {
    index.value++;
    pathData.value = initialPath.value;
    animateLoadingTextContainer();
    animateLoadingText('span.loading-text');

    animateLoadingPath(
      path as Ref<SVGPathElement>,
      targetPath.value,
      isSamsungBrowser,
    );
  });

  // TODO: remove it
  watch(
    [width, height],
    () => {
      initialPath.value = `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${curveHeight.value} 0 ${height.value} L0 0`;
      targetPath.value = `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`;

      pathData.value = initialPath.value;
    },
    {
      immediate: true,
    },
  );

  watch(isLoading, (newVal) => {
    emit('isLoading', newVal);
  });
</script>