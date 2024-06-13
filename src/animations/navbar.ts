import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const navbarScale = (selector: string, trigger: string) => {
  gsap.defaults({ overwrite: 'auto', onOverwrite: () => true });
  gsap.fromTo(
    selector,
    { scale: 0 },
    {
      scrollTrigger: {
        trigger: trigger,
        start: 'top 80%',
        end: '10% 50%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.3,
      scale: 1,
      ease: 'power1'
    }
  );
};

export { navbarScale };
