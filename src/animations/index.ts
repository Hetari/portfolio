import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Ref } from 'vue';
gsap.registerPlugin(ScrollTrigger);

const navbarScale = (selector: string, trigger: string) => {
  gsap.fromTo(
    selector,
    { scale: 0 },
    {
      scrollTrigger: {
        trigger: trigger,
        start: '10% 10%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.3,
      scale: 1,
      ease: 'power1'
    }
  );
};

const activateMagneto = (
  event: MouseEvent,
  magneto: Ref<HTMLElement>,
  magnetoText: Ref<HTMLElement>
) => {
  const boundBox = magneto.value.getBoundingClientRect();
  const magnetoStrength = 70;
  const magnetoTextStrength = 50;

  const newX =
    (event.clientX - boundBox.left) / magneto.value.offsetWidth - 0.5;

  const newY =
    (event.clientY - boundBox.top) / magneto.value.offsetHeight - 0.5;

  // move the magneto
  gsap.to(magneto.value, {
    duration: 0.1,
    x: newX * magnetoStrength,
    y: newY * magnetoStrength,
    ease: 'power1.inOut'
  });

  // move the text
  gsap.to(magnetoText.value, {
    duration: 0,
    x: newX * magnetoTextStrength,
    y: newY * magnetoTextStrength,
    ease: 'expo.inOut'
  });
};

const resetMagneto = (
  magneto: Ref<HTMLElement>,
  magnetoText: Ref<HTMLElement>
) => {
  gsap.to(magneto.value, {
    duration: 0.4,
    x: 0,
    y: 0,
    ease: 'bounce.out'
  });

  gsap.to(magnetoText.value, {
    duration: 0.4,
    x: 0,
    y: 0,
    ease: 'bounce.out'
  });
};

export { navbarScale, activateMagneto, resetMagneto };
