function toggleMobileMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  mobileMenu.classList.toggle("openMenu");
}
// module.exports = toggleMobileMenu;
export { toggleMobileMenu };
