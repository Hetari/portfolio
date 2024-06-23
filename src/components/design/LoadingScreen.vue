<template>
  <div
    id="loading-screen"
    class="flex-center fixed bottom-0 z-[99999] size-full cursor-wait bg-[#141516]"
  >
    <div v-if="width > 0" class="size-full flex-col">
      <svg class="absolute top-0 z-0 size-full h-[calc(100%_+_300px)]">
        <path ref="path" :d="pathData"></path>
      </svg>
      <p
        id="text"
        style="transform: translateZ(0px)"
        class="flex-center z-[1] size-full text-center text-[42px] text-primary opacity-0"
      >
        <span class="mr-[10px] block size-[10px] rounded-full bg-primary"></span
        >{{ words[index] }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { onMounted, ref, watch } from 'vue';
  import { gsap } from 'gsap';
  const index = ref(-1);
  const pathData = ref('');
  const path = ref<SVGPathElement>();

  const { width, height } = useWindowSize();

  const initialPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value + 300} 0 ${height.value}  L0 0`,
  );

  const targetPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`,
  );

  const animatePath = () => {
    const tl = gsap.timeline({});

    tl.to(path.value as SVGPathElement, {
      duration: 1,
      attr: { d: targetPath.value },
      ease: 'power2.inOut',
      delay: 0.5,
    });

    tl.to(
      '#loading-screen',
      {
        bottom: '100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          width.value = 0;
          height.value = 0;
          gsap.set('#loading-screen', { display: 'none' });
        },
      },
      '<',
    );
  };

  const animateText = () => {
    gsap.fromTo(
      '#text',
      {
        yoyo: true,
        opacity: 0,
        duration: (index.value == 0 ? 1 : 0.15) / 2,
      },
      {
        opacity: 1,
        duration: (index.value == 0 ? 1 : 0.15) / 2,
        ease: 'circ.inOut',
      },
    );
  };

  onMounted(() => {
    index.value++;
    // Set initial path
    pathData.value = initialPath.value;
    animateText();
  });

  watch(index, (newVal) => {
    if (newVal === words.length - 1) {
      animatePath();
      return;
    }

    setTimeout(
      () => {
        index.value = newVal + 1;
        animateText();
      },
      index.value == 0 ? 1000 : 150,
    );
  });

  const words = [
    'Hello', // English
    'Bonjour', // French
    'Ciao', // Italian
    'やあ', // Japanese
    'Guten tag', // German
    'Salam', // Malay/Indonesian
    'Merhaba', // Turkish
    'مرحبا', // Arabic
  ];
</script>
