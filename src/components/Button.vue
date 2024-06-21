<template>
  <button class="rounded-full border px-4 py-1 text-primary">
    {{ label }}
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
