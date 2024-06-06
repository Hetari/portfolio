<template>
  <div
    @click="toggleBtnClick"
    id="BurgerMenu"
    class="fixed right-0 m-5 size-[4.5rem] rounded-full bg-tertiary z-[999] cursor-pointer flex-center hover:scale-90 transition-transform duration-500 ease-in-out">
    <button
      id="BurgerMenuBtn"
      class="w-[100%]"></button>
  </div>
</template>

<script setup lang="ts">
  const toggleBtnClick = () => {
    document.getElementById('BurgerMenu')?.classList.toggle('active');
  };
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
