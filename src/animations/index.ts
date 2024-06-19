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
        start: '15% 10%',
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
  const xDivTo = gsap.quickTo(magneto.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });
  const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });

  const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });
  const yDivTo = gsap.quickTo(magneto.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });

  const { clientX, clientY } = event;
  const { width, height, left, top } = magneto.value.getBoundingClientRect();

  const magnetoStrength = 70;
  const magnetoTextStrength = 50;
  const newX = ((clientX - left) / width - 0.5) * magnetoStrength;
  const newY = ((clientY - top) / height - 0.5) * magnetoTextStrength;
  // const newX = clientX - (left + width / 2);
  // const newY = clientY - (top + height / 2);

  // move the magneto
  xDivTo(newX);
  yDivTo(newY);

  // move the text
  xTextTo(newX);
  yTextTo(newY);
};

const resetMagneto = (
  magneto: Ref<HTMLElement>,
  magnetoText: Ref<HTMLElement>
) => {
  const xDivTo = gsap.quickTo(magneto.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });
  const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });

  const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });
  const yDivTo = gsap.quickTo(magneto.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)'
  });

  xDivTo(0);
  yDivTo(0);

  // move the text
  xTextTo(0);
  yTextTo(0);
};

export { navbarScale, activateMagneto, resetMagneto };
