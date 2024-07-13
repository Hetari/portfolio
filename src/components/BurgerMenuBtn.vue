<template>
  <MagneticEffect divId="magneto" textId="magnetoText">
    <div v-bind="$attrs" class="fixed right-7 top-7 z-[20]">
      <div
        id="magneto"
        class="flex-center bg-flax-smoke-500 size-[4.5rem] cursor-pointer rounded-full ease-in-out"
      >
        <span
          class="before:bg-flax-smoke-200 after:bg-flax-smoke-200 w-[100%] text-center"
          id="magnetoText"
        ></span>
      </div>
    </div>
  </MagneticEffect>
</template>

<script setup lang="ts">
  import MagneticEffect from './MagneticEffect.vue';
</script>

<style scoped>
  #magnetoText::before,
  #magnetoText::after {
    width: 40%;
    content: ' ';
    display: block;
    height: 1px;
    position: relative;
    margin: auto;
    transition: all 0.3s ease-in-out;
  }

  #magnetoText::before {
    top: 5px;
  }

  #magnetoText::after {
    top: -5px;
  }

  .active #magnetoText::before {
    transform: rotate(-45deg);
    top: 0px;
  }

  .active #magnetoText::after {
    transform: rotate(45deg);
    top: -1px;
  }
</style>
