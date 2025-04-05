import { gsap } from "gsap";


function animateHowItWorks() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#how-it-works",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Section header animation
  tl.from("#how-it-works header", {
    duration: 0.6,
    opacity: 0,
    y: 40,
    ease: "power2.out",
  })
    // Image and steps container
    .from(
      "#how-it-works .flex.justify-center",
      {
        duration: 0.8,
        opacity: 0,
        x: -40,
        ease: "back.out(1.2)",
        stagger: {
          amount: 0.4,
          from: "edges",
        },
      },
      "-=0.3"
    )
    // Step items animation
    .from("#how-it-works .flex-col.sm\\:flex-row", {
      duration: 0.8,
      opacity: 0,
      y: 40,
      stagger: 0.3,
      ease: "power2.out",
      onComplete: addStepHoverEffects,
    })
    // Number badges animation
    .from(
      "#how-it-works .bg-pink",
      {
        duration: 0.6,
        scale: 0,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.4"
    );

  // Add hover effects to number badges
  function addStepHoverEffects() {
    document.querySelectorAll(".bg-pink").forEach((badge) => {
      gsap
        .to(badge, {
          scale: 1.05,
          repeat: 1,
          yoyo: true,
          paused: true,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .eventCallback("onMouseOver", () => this.play())
        .eventCallback("onMouseOut", () => this.reverse());
    });
  }
}

export { animateHowItWorks };
