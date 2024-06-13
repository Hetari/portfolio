<template>
  <li class="w-full h-8 overflow-hidden">
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
  </li>
</template>

<script setup lang="ts">
  defineProps({
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
