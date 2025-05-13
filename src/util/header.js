const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Add blur background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("backdrop-blur-lg");
  } else {
    navbar.classList.remove("backdrop-blur-lg");
  }
});
