<template>
  <!-- TODO: read the code and understand it well -->
  <a
    id="button"
    class="leading-base group pointer-events-auto relative h-full transform-none overflow-hidden rounded-full border border-[#6b645c] bg-tertiary-dark px-3 py-2 text-[1rem] text-xs font-semibold uppercase tracking-normal text-primary before:bg-primary sm:text-sm md:px-5 md:py-2"
    target="”_blank”"
    :href="url"
  >
    <span
      class="ease-expo flex-center absolute bottom-0 left-0 z-10 my-auto size-full w-full translate-y-full overflow-clip rounded-t-[15rem] bg-[#8c8c73] text-center transition-all duration-700 group-hover:translate-y-0 group-hover:rounded-none"
    >
      {{ label }}</span
    >

    <span
      class="after:ease-expo flex-center relative z-20 overflow-hidden text-center transition-all after:absolute after:left-0 after:inline-block after:translate-y-0 after:text-primary after:transition-all after:duration-700 after:content-[attr(after)] group-hover:after:-translate-y-[100%]"
      ><span
        class="ease-expo flex transition-all duration-700 group-hover:-translate-y-full"
        >{{ label }}</span
      ></span
    >
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
