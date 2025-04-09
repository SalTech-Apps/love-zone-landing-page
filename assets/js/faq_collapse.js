function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const allAnswers = document.querySelectorAll(".faq-answer");
  const allButtons = document.querySelectorAll("button[aria-expanded]");

  // Close all other FAQ answers
  allAnswers.forEach((ans) => {
    if (ans !== answer) {
      ans.classList.add("hidden");
      ans.setAttribute("aria-hidden", "true");
    }
  });

  // Reset the state of all other buttons
  allButtons.forEach((btn) => {
    if (btn !== element) {
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("bg-primary", "text-white");
      element.removeAttribute("style"); 
      btn.querySelector(".faq-icon").textContent = "+";
    }
  });

  // Toggle the clicked FAQ answer
  const isOpen = element.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    answer.classList.add("hidden");
    answer.setAttribute("aria-hidden", "true");
    element.setAttribute("aria-expanded", "false");
    element.classList.remove("bg-primary", "text-white");
    element.querySelector(".faq-icon").textContent = "+";
    element.removeAttribute("style"); 

  } else {
    answer.classList.remove("hidden");
    answer.setAttribute("aria-hidden", "false");
    element.setAttribute("aria-expanded", "true");
    element.classList.add("bg-primary", "text-white");
    element.style.backgroundImage = "linear-gradient(to right, #FF5672, #FE9748)";
    element.querySelector(".faq-icon").textContent = "-";
  }
}
  
export { toggleFAQ };