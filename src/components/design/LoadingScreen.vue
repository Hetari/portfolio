<template>
  <div
    v-if="!isLoading"
    id="loading-screen"
    class="flex-center fixed bottom-0 z-[99999] size-full cursor-wait"
  >
    <div class="size-full w-full flex-col">
      <svg
        class="absolute top-0 z-0 h-[calc(100%_+_300px)] w-full fill-tertiary-dark brightness-50"
      >
        <path ref="path" class="w-full" :d="pathData"></path>
      </svg>
      <div
        id="text"
        style="transform: translateZ(0px)"
        class="z-[1] flex size-full flex-col items-center justify-center text-center text-4xl font-bold text-primary/75 opacity-0 md:text-6xl"
        :class="{ 'text-4xl font-bold md:text-6xl': true }"
      >
        <p class="overflow-clip">
          <span class="loading-text inline-block translate-y-full">
            {{ text1 }}
          </span>
        </p>

        <p class="overflow-clip">
          <span class="loading-text inline-block translate-y-full opacity-70">
            &copy; {{ text2 }}
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

  const text1 = 'Hetari';
  const text2 = 'Folio 2024';

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

    return height.value + height.value * multiplier;
  });
  const initialPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${curveHeight.value} 0 ${height.value}  L0 0`,
  );
  const targetPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`,
  );

  onMounted(() => {
    index.value++;
    pathData.value = initialPath.value;
    animateLoadingTextContainer();
    animateLoadingText('.loading-text');

    animateLoadingPath(path as Ref<SVGPathElement>, targetPath.value);
  });

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
