<template>
  <component
    :is="tag"
    class="h-full select-none overflow-y-hidden"
    :class="{ 'max-md:h-[2.5ch]': i18n.global.locale == 'ar' }"
  >
    <a @click="gotoSection(url)" :href="url" class="group">
      <p
        class="font-fancy -translate-y-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-150%]"
      >
        {{ label }}
      </p>
      <p
        class="font-fancy translate-y-[150%] transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]"
      >
        {{ label }}
      </p>
    </a>
  </component>
</template>

<script setup lang="ts">
  import { i18n, lenis } from '@/main';

  const gotoSection = (url: string) => {
    lenis.start();
    lenis.scrollTo(url, { duration: 1 });
  };

  defineProps({
    tag: {
      type: String,
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
