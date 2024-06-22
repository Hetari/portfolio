<template>
  <button
    class="group relative rounded-full border px-4 py-1 font-medium text-primary hover:bg-primary hover:text-primary-dark"
  >
    <a target="”_blank”" :href="url">{{ label }}</a>
  </button>
</template>

<script setup lang="ts">
  defineProps({
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
