<template>
  <MagneticEffect
    divId="magneto"
    textId="magnetoText">
    <div
      v-bind="$attrs"
      class="fixed right-7 top-7">
      <div
        id="magneto"
        class="z-[999] size-20 rounded-full bg-tertiary cursor-pointer flex-center ease-in-out will-change-transform">
        <span
          class="text-center w-[100%]"
          id="magnetoText"></span>
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
    background-color: #000;
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
