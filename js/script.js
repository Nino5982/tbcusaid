// transparent header  on scroll

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.innerWidth <= 768) {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll down
      header.style.top = "-68px"; 
    } else {
      // Scroll up
      header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
  } else {
    // Reset the header position for larger screens
    header.style.top = "0";
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

// acordion

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const toggle = header.querySelector(".accordion-toggle svg");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      // Toggle the active class to expand/collapse the content
      const isActive = content.classList.toggle("active");

      // Rotate the arrow
      if (isActive) {
        toggle.style.transform = "rotate(180deg)";
      } else {
        toggle.style.transform = "rotate(0deg)";
      }
    });
  });
});
