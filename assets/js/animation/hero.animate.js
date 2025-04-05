import { gsap } from "gsap";

function animateAboutSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from("#about .text-primary", {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2,
  })
    .from(
      "#about h1",
      {
        duration: 0.8,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from("#about p", {
      duration: 0.6,
      opacity: 0,
      x: -40,
    })
    .from(
      "#about img",
      {
        duration: 0.8,
        opacity: 0,
        scale: 0.9,
        ease: "back.out(1.4)",
      },
      "-=0.2"
    )
    .from("#about .flex.gap-3", {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.1,
    })
    .to("#about .fa-arrow-down", {
      duration: 0.8,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
}

export { animateAboutSection };
