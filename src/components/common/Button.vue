<template>
  <a
    id="button"
    class="leading-base text-flax-smoke-100 bg-flax-smoke-950 border-flax-smoke-600 group pointer-events-auto relative h-full transform-none overflow-hidden rounded-full border px-5 py-2 text-[1rem] font-semibold uppercase tracking-normal sm:text-sm"
    target="_blank"
    :href="url"
  >
    <span
      class="ease-expo flex-center bg-flax-smoke-500 absolute bottom-0 left-0 z-10 my-auto size-full w-full translate-y-full rounded-t-[15rem] font-fancy transition-all duration-700 group-hover:translate-y-0 group-hover:rounded-none"
    >
      {{ label }}</span
    >

    <span
      class="after:ease-expo flex-center after:text-flax-smoke-200 relative z-20 overflow-hidden transition-all after:absolute after:left-0 after:inline-block after:translate-y-0 after:transition-all after:duration-700 after:content-[attr(after)] group-hover:after:-translate-y-[100%]"
    >
      <span
        class="ease-expo font-fancy transition-all duration-700 group-hover:-translate-y-full"
        >{{ label }}</span
      >
    </span>
  </a>
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

<style scoped>
  .ease-expo {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
</style>
