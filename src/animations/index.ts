import gsap from 'gsap';
import MotionPathHelper from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathHelper);

const animateSplitText = (
  id: string,
  duration: number = 0.8,
  stagger: number = 0.005,
  delay: number = 0.3,
) => {
  gsap.to(id, {
    scrollTrigger: {
      trigger: id,
      toggleActions: 'play none none reverse',
      start: 'top 95%',
    },
    delay: delay,
    duration: duration,
    y: 0,
    autoAlpha: 1,
    stagger: stagger,
    ease: 'power4.inOut',
  });
};
const navbarScale = (selector: string, trigger: string) => {
  gsap.fromTo(
    selector,
    { scale: 0 },
    {
      scrollTrigger: {
        trigger: trigger,
        // start: '15% 10%',
        start: '40% center',
        //toggleActions: start, leave, enterBack, leaveBack
        toggleActions: 'play none none reverse',
      },
      duration: 0.3,
      scale: 1,
      ease: 'power1',
    },
  );
};

// ! common animations
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

// ! Magneto effects
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

const animateNavbarEnter = (
  navbarSelector: string,
  navbarLinksSelector: string,
  contactSelector: string,
) => {
  navbarEnter(navbarSelector);
  yToZero(navbarLinksSelector);
  fadeIn(contactSelector);
};

const animateNavbarLeave = (
  navbarSelector: string,
  navbarLinksSelector: string,
  contactSelector: string,
) => {
  navbarLeave(navbarSelector);
  yReset(navbarLinksSelector);
  resetOpacity(contactSelector);
};

// ! Loading animation
const animateLoadingPath = (path: Ref<SVGPathElement>, targetPath: string) => {
  const tl = gsap.timeline({});
  tl.to('#loading-screen', {
    delay: 2.5,
    bottom: '100%',
    duration: 1,
    ease: 'power2.inOut',
  });

  tl.to(
    path.value,
    {
      duration: 1,
      attr: { d: targetPath },
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set('#loading-screen', { display: 'none' });
      },
      onStart: () => {
        setTimeout(() => {
          animateHeroNav();
        }, 250);
      },
    },
    '<20%',
  );
};

const animateLoadingTextContainer = () => {
  gsap.fromTo(
    '#text',
    1,
    {
      yoyo: true,
      opacity: 0,
    },
    {
      opacity: 1,
      ease: 'circ.inOut',
    },
  );
};

const animateLoadingText = (id: string) => {
  gsap.to(id, {
    y: 0,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.1,
    onComplete: () => {
      gsap.to(id, {
        delay: 1.2,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(id, {
            y: '100%',
            opacity: 100,
          });
        },
      });
    },
  });
};

// ! Hero
const animateHeroNav = () => {
  gsap.to(['#my-name', 'header'], {
    y: 0,
    duration: 0.8,
    ease: 'power4.inOut',
  });

  gsap.to('.overlay', {
    y: '100%',
    duration: 0.8,
    ease: 'power4.inOut',
    onComplete: () => {
      gsap.set('.overlay', { display: 'none' });
    },
  });

  gsap.to('#profile-img', {
    scale: 1,
    duration: 0.8,
    ease: 'power4.inOut',
  });

  animateSplitText('#whoAmI .letters');

  gsap.to(['#location', '#art'], {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  });

  // Hero scroll animation
  gsap.to('#hero', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      scrub: 1,
    },
    opacity: 0.5,
    scale: 0.9,
    translateZ: 0,
  });
};

export {
  navbarScale,
  activateMagneto,
  resetMagneto,
  animateNavbarEnter,
  animateNavbarLeave,
  animateLoadingPath,
  animateLoadingText,
  animateLoadingTextContainer,
  animateHeroNav,
  animateSplitText,
};
