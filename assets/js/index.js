import { toggleFAQ } from "./faq_collapse.js";
import { toggleMobileMenu } from "./navbar.js";
import { updateCarousel, setTestimonial } from "./testimonies.js";
import { initAnimations } from "./animation/index.js";

window.toggleFAQ = toggleFAQ;
window.toggleMobileMenu = toggleMobileMenu;
window.setTestimonial = setTestimonial;
window.updateCarousel = updateCarousel;

document.addEventListener("DOMContentLoaded", initAnimations);
