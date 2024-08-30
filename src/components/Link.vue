<template>
  <component :is="tag" class="select-none overflow-y-hidden">
    <a @click="gotoSection(url)" :href="url" class="group">
      <p
        class="-translate-y-0 font-title transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]"
      >
        {{ label }}
      </p>
      <p
        class="-translate-y-0 font-title transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]"
      >
        {{ label }}
      </p>
    </a>
  </component>
</template>

<script setup lang="ts">
  import { lenis } from '@/main';

  const gotoSection = (url: string) => {
    lenis.start();
    lenis.scrollTo(url, { duration: 1 });
  };

  defineProps({
    tag: {
      type: String,
      required: true,
      default: 'p', // Default tag if not provided
    },
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  });
</script>
