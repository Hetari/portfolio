import gsap from 'gsap';
import MotionPathHelper from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Ref } from 'vue';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathHelper);

const navbarScale = (selector: string, trigger: string) => {
  gsap.fromTo(
    selector,
    { scale: 0 },
    {
      scrollTrigger: {
        trigger: trigger,
        start: '15% 10%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      scale: 1,
      ease: 'power1',
    },
  );
};

const activateMagneto = (
  event: MouseEvent,
  magneto: Ref<HTMLElement>,
  magnetoText: Ref<HTMLElement>,
  magnetoStrengthVal: number,
  magnetoTextStrengthVal: number,
) => {
  const xDivTo = gsap.quickTo(magneto.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const yDivTo = gsap.quickTo(magneto.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  const { clientX, clientY } = event;
  const { width, height, left, top } = magneto.value.getBoundingClientRect();

  const magnetoStrength = magnetoStrengthVal;
  const magnetoTextStrength = magnetoTextStrengthVal;
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
  magnetoText: Ref<HTMLElement>,
) => {
  const xDivTo = gsap.quickTo(magneto.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const yDivTo = gsap.quickTo(magneto.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  xDivTo(0);
  yDivTo(0);

  // move the text
  xTextTo(0);
  yTextTo(0);
};

// ! Nav animation
const navbarEnter = (id: string) => {
  gsap.to(id, {
    x: '0%',
    duration: 0.7,
    // ease: 'power1.inOut',
  });

  // gsap.to('#navbarSvg path', {
  //   duration: 0.7,
  //   // ease: 'power1.inOut',
  //   attr: {
  //     d: pathTarget,
  //   },
  // });
};

const navbarLeave = (id: string) => {
  gsap.to(id, {
    x: '100%',
    duration: 0.7,
    // ease: 'power1.inOut',
  });

  // gsap.to('#navbarSvg path', {
  //   duration: 0.7,
  //   // ease: 'power1.inOut',
  //   attr: {
  //     d: pathInit,
  //   },
  // });
};

const navLinksEnter = (id: string) => {
  gsap.to(`${id} li`, {
    x: '0%',
    duration: 0.7,
    ease: 'power1.inOut',
    stagger: 0.1,
  });
};

const navLinksLeave = (id: string) => {
  gsap.set(`${id} li`, {
    x: '40px',
    delay: 0.7,
  });
};

const yToZero = (id: string) => {
  gsap.to(id, {
    y: '0%',
    duration: 0.7,
    ease: 'power1.inOut',
  });
};

const yReset = (id: string) => {
  gsap.set(id, {
    y: '100%',
    delay: 0.7,
  });
};

export {
  navbarScale,
  activateMagneto,
  resetMagneto,
  navbarEnter,
  navbarLeave,
  navLinksEnter,
  navLinksLeave,
  yToZero,
  yReset,
};
