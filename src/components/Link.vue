<template>
  <component
    :is="tag"
    class="w-full h-6 sm:h-8 overflow-y-hidden select-none px-2">
    <a
      :href="url"
      class="group">
      <div
        class="-translate-y-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]">
        {{ label }}
      </div>
      <div
        class="-translate-y-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]">
        {{ label }}
      </div>
    </a>
  </component>
</template>

<script setup lang="ts">
  defineProps({
    tag: {
      type: String,
      required: true,
      default: 'p' // Default tag if not provided
    },
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  });
</script>
