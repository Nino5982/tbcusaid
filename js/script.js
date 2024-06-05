// transparent header  on scroll

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// mobile-menu

const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector("nav ul");
const mainContent = document.querySelector("body");
mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  mobileMenu.classList.toggle("rotate");
  mainContent.classList.toggle("inaccessible");
});


