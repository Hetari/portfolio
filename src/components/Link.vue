<template>
  <component :is="tag" class="w-full select-none overflow-y-hidden">
    <a :href="url" class="group">
      <p
        class="-translate-y-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]"
      >
        {{ label }}
      </p>
      <p
        class="-translate-y-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]"
      >
        {{ label }}
      </p>
    </a>
  </component>
</template>

<script setup lang="ts">
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
