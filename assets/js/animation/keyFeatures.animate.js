import { gsap } from "gsap";

function animateKeyFeatures() {
  const master = gsap.timeline({
    scrollTrigger: {
      trigger: ".bg-gradient-to-b",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Title animation
  master.from(".py-12 .text-center", {
    duration: 0.8,
    opacity: 0,
    y: 40,
    ease: "power4.out",
  });

  master.from(
    ".bg-gradient-to-b",
    {
      duration: 1,
      opacity: 0,
      y: 40,
      ease: "expo.out",
    },
    "-=0.3"
  );

  const images = gsap.utils.toArray(".bg-gradient-to-b .flex-1 img");

  images.forEach((img, i) => {
    const parent = img.parentElement;

    const imageTl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    imageTl
      .from(parent, {
        opacity: 0,
        y: 40,
        scale: 0.95,
      })
      .from(
        img,
        {
          opacity: 0,
          scale: 1.05,
          filter: "blur(4px)",
        },
        "<0.1"
      );

    master.add(imageTl.play(), i * 0.15);
  });

  images.forEach((img) => {
    gsap.to(img, {
      scale: 1.03,
      duration: 0.3,
      paused: true,
      ease: "power1.out",
      overwrite: "auto",
      onMouseOver: function () {
        this.play();
      },
      onMouseOut: function () {
        this.reverse();
      },
    });
  });
}

export { animateKeyFeatures };
