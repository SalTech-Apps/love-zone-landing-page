import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { animateAboutSection } from "./hero.animate";
import { animateHowItWorks } from "./how-it-works.animate";
import { animateKeyFeatures } from "./keyFeatures.animate";

function initAnimations() {
  animateAboutSection();
  animateHowItWorks();
  animateKeyFeatures();
  initFAQAnimations();

  window.addEventListener('beforeunload', () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
    gsap.globalTimeline.clear();
  });
}

export { initAnimations };
