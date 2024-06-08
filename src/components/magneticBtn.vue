<template>
  <div
    id="BurgerMenu"
    class="z-[999] size-24 rounded-full bg-tertiary cursor-pointer flex-center ease-in-out will-change-transform">
    <slot>
      <span class="text-center w-[100%]"> {{ text }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      default: 'Click here',
    },
  });
</script>
