<template>
  <div
    v-bind="$attrs"
    class="fixed right-7 top-7">
    <magneticBtn ref="magnetoText">
      <span
        class="text-center w-[100%]"
        id="BurgerMenuBtn"></span>
    </magneticBtn>
  </div>
  <aside></aside>
</template>

<script setup lang="ts">
  import { magneticBtn } from '.';
  import { useWindowSize } from '@vueuse/core';

  import { onMounted, onUnmounted, ref, Ref } from 'vue';
  import { activateMagneto, resetMagneto } from '@/animations';

  const { width } = useWindowSize();
  let magneto: Ref<HTMLElement>;
  let magnetoText: Ref<HTMLElement>;

  const handleMouseMove = (e: MouseEvent) => {
    activateMagneto(e, magneto, magnetoText);
  };

  const handleMouseLeave = () => {
    resetMagneto(magneto, magnetoText);
  };

  onMounted(() => {
    magneto = ref(document.getElementById('BurgerMenu') as HTMLElement);
    magnetoText = ref(document.getElementById('BurgerMenuBtn') as HTMLElement);

    if (width.value > 700) {
      magneto.value.addEventListener('mousemove', handleMouseMove);
      magneto.value.addEventListener('mouseleave', handleMouseLeave);
    }
  });

  onUnmounted(() => {
    magneto.value.removeEventListener('mousemove', handleMouseMove);
    magnetoText.value.removeEventListener('mouseleave', handleMouseLeave);
  });
</script>

<style>
  #BurgerMenuBtn::before,
  #BurgerMenuBtn::after {
    width: 40%;
    content: ' ';
    display: block;
    background-color: #000;
    height: 1px;
    position: relative;
    margin: auto;
    transition: all 0.3s ease-in-out;
  }

  #BurgerMenuBtn::before {
    top: 5px;
  }

  #BurgerMenuBtn::after {
    top: -5px;
  }

  .active #BurgerMenuBtn::before {
    transform: rotate(-45deg);
    top: 0px;
  }

  .active #BurgerMenuBtn::after {
    transform: rotate(45deg);
    top: -1px;
  }
</style>
