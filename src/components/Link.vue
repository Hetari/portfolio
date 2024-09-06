<template>
  <component
    :is="tag"
    class="w-fit select-none overflow-y-hidden"
    :class="i18n.global.locale == 'ar' ? 'h-[2.5ch]' : 'h-[2ch] max-md:h-5'"
  >
    <a @click="gotoSection(url)" :href="url" class="group">
      <p
        class="font-fancy -translate-y-0 transition-all duration-300 ease-in-out"
        :class="
          i18n.global.locale == 'en'
            ? 'group-hover:translate-y-[-100%]'
            : 'group-hover:translate-y-[-120%]'
        "
      >
        {{ label }}
      </p>
      <p
        class="font-fancy transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]"
        :class="{
          'translate-y-[1ch]': i18n.global.locale == 'ar',
        }"
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
