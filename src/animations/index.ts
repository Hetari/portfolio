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
    opacity: 1,
    duration: 0.7,
    // ease: 'power1.inOut',
  });
};

const navbarLeave = (id: string) => {
  gsap.to(id, {
    opacity: 0,
    onComplete: () => {
      gsap.set(id, {
        x: '100%',
      });
    },
  });
};

const yToZero = (id: string) => {
  gsap.to(id, {
    y: '0%',
    duration: 0.4,
    ease: 'power1.inOut',
    stagger: 0.1,
  });
};

const yReset = (id: string) => {
  gsap.set(id, {
    y: '100%',
  });
};

const fadeIn = (id: string, opacity: number = 1) => {
  gsap.to(id, {
    opacity: opacity,
    duration: 0.5,
    ease: 'power4.inOut',
    stagger: 0.1,
  });
};

const resetOpacity = (id: string, opacity: number = 0) => {
  gsap.set(id, {
    opacity: opacity,
  });
};

// Loading animation
const animateLoadingPath = (
  width: Ref<number>,
  height: Ref<number>,
  path: Ref<SVGPathElement>,
) => {
  const targetPath = `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`;

  const tl = gsap.timeline({});
  tl.to(path.value, {
    duration: 1,
    attr: { d: targetPath },
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
        // gsap.set('#loading-screen', { display: 'none' });
      },
    },
    '<',
  );
};

const animateLoadingText = (index: number) => {
  gsap.fromTo(
    '#text',
    {
      yoyo: true,
      opacity: 0,
      duration: (index == 0 ? 1 : 0.15) / 2,
    },
    {
      opacity: 1,
      duration: (index == 0 ? 1 : 0.15) / 2,
      ease: 'circ.inOut',
    },
  );
};

export {
  navbarScale,
  activateMagneto,
  resetMagneto,
  navbarEnter,
  navbarLeave,
  yToZero,
  yReset,
  fadeIn,
  resetOpacity,
  animateLoadingPath,
  animateLoadingText,
};
