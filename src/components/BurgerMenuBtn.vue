<template>
  <div
    class="fixed right-7 top-7"
    @click="toggleBtnClickAnimation">
    <magneticBtn ref="magnetoText">
      <span
        class="text-center w-[100%]"
        id="BurgerMenuBtn"></span>
    </magneticBtn>
  </div>
</template>

<script setup lang="ts">
  import { magneticBtn } from '.';
  const toggleBtnClickAnimation = () => {
    document.getElementById('BurgerMenu')?.classList.toggle('active');
  };

  import { onMounted, ref, Ref } from 'vue';
  import gsap from 'gsap';

  onMounted(() => {
    const magneto: Ref<HTMLElement> = ref(
      document.getElementById('BurgerMenu') as HTMLElement
    );
    const magnetoText: Ref<HTMLElement> = ref(
      document.getElementById('BurgerMenuBtn') as HTMLElement
    );

    const activateMagneto = (event: MouseEvent) => {
      const boundBox = magneto.value.getBoundingClientRect();
      const magnetoStrength = 25;
      const magnetoTextStrength = 50;

      const newX =
        (event.clientX - boundBox.left) / magneto.value.offsetWidth - 0.5;

      const newY =
        (event.clientY - boundBox.top) / magneto.value.offsetHeight - 0.5;

      // move the magneto
      gsap.to(magneto.value, {
        duration: 0,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,

        ease: 'expo.inOut'
      });

      // move the text
      gsap.to(magnetoText.value, {
        duration: 0,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: 'expo.inOut'
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto.value, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'bounce.out'
      });

      gsap.to(magnetoText.value, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'bounce.out'
      });
    };

    magneto.value.addEventListener('mousemove', activateMagneto);
    magneto.value.addEventListener('mouseleave', resetMagneto);
  });
</script>

<style scoped>
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
