<template>
  <slot />
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { onMounted, onUnmounted, ref, Ref } from 'vue';
  import { activateMagneto, resetMagneto } from '@/animations';

  const props = defineProps({
    divId: {
      type: String,
      required: true,
    },
    textId: {
      type: String,
      required: true,
    },
    magnetoStrengthVal: {
      type: Number,
      default: 70,
    },
    magnetoTextStrengthVal: {
      type: Number,
      default: 50,
    },
  });

  const { width } = useWindowSize();
  let magneto: Ref<HTMLElement>;
  let magnetoTextRef: Ref<HTMLElement>;

  const handleMouseMove = (e: MouseEvent) => {
    activateMagneto(
      e,
      magneto,
      magnetoTextRef,
      props.magnetoStrengthVal,
      props.magnetoTextStrengthVal,
    );
  };

  const handleMouseLeave = () => {
    resetMagneto(magneto, magnetoTextRef);
  };

  onMounted(() => {
    magneto = ref(document.getElementById(props.divId) as HTMLElement);
    magnetoTextRef = ref(document.getElementById(props.textId) as HTMLElement);

    if (width.value > 700) {
      magneto.value.addEventListener('mousemove', handleMouseMove);
      magneto.value.addEventListener('mouseleave', handleMouseLeave);
    }
  });

  onUnmounted(() => {
    magneto.value.removeEventListener('mousemove', handleMouseMove);
    magnetoTextRef.value.removeEventListener('mouseleave', handleMouseLeave);
  });
</script>
