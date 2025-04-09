const testimonials = [
  {
    name: "Evans Raphael",
    image:
      "https://images.unsplash.com/photo-1522724709546-19901cb1818a?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "I found the love of my life 💖, we met and got engaged! Today we are happy, God united us thanks to this application.",
    rating: 5,
  },
  {
    name: "Sophia Turner",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1326&auto=format&fit=crop&ixlib=rb-4.0.3",
    quote:
      "This platform transformed my dating experience. Highly recommended!",
    rating: 4.8,
  },
  {
    name: "James Anderson",
    image:
      "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Great service! I met someone special, and we're building something amazing together.",
    rating: 5,
  },
  {
    name: "Olivia Bennett",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1326&auto=format&fit=crop&ixlib=rb-4.0.3",
    quote:
      "The interface is user-friendly, and the matches felt genuine. Thank you!",
    rating: 4.7,
  },
  {
    name: "William Carter",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1326&auto=format&fit=crop&ixlib=rb-4.0.3",
    quote:
      "I was skeptical at first, but now I’m convinced this is the best dating app!",
    rating: 4.9,
  },
  {
    name: "Emma Brooks",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1326&auto=format&fit=crop&ixlib=rb-4.0.3",
    quote: "The app has a refreshing approach. Found great connections here.",
    rating: 4.5,
  },
  {
    name: "Lucas Gray",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1326&auto=format&fit=crop&ixlib=rb-4.0.3",
    quote: "This platform is incredible! It exceeded all my expectations.",
    rating: 5,
  },
];

const imagesToShow = 2; // Number of images to show on each side
let currentIndex = 0;

const testimonialText = document.querySelector(".testimonial-text");
const carouselImages = document.querySelectorAll(".carousel-images");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateCarousel() {
  const testimonial = testimonials[currentIndex];

  // Add fade animation for testimonial text
  testimonialText.classList.add("opacity-0");
  setTimeout(() => {
    // Update main testimonial text
    testimonialText.innerHTML = `
        <img src="${testimonial.image}" alt="${
      testimonial.name
    }" class="transition-transform duration-300 object-cover object-center">
        <h4>${testimonial.name}</h4>
        <p>${testimonial.quote}</p>
        <div class="text-amber-500 text-xl">${"⭐".repeat(
          Math.floor(testimonial.rating)
        )}</div>
      `;
    testimonialText.classList.remove("opacity-0");
  }, 300);

  // Update left images with slide animation
  const leftImages = [];
  for (let i = 1; i <= imagesToShow; i++) {
    const index =
      (currentIndex - i + testimonials.length) % testimonials.length;
    leftImages.unshift(
      `<img src="${testimonials[index].image}" alt="Customer ${index}" onclick="setTestimonial(${index})" class="transition-transform duration-300">`
    );
  }
  carouselImages[0].innerHTML = leftImages.join("");

  // Update right images with slide animation
  const rightImages = [];
  for (let i = 1; i <= imagesToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    rightImages.push(
      `<img src="${testimonials[index].image}" alt="Customer ${index}" onclick="setTestimonial(${index})" class="transition-transform duration-300">`
    );
  }
  carouselImages[1].innerHTML = rightImages.join("");
}

 function setTestimonial(index) {
   currentIndex = index;
   updateCarousel();
 }

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateCarousel();
});

updateCarousel();

export { setTestimonial, updateCarousel };
