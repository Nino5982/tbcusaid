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

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./images/company-logos/1.png",
    "./images/company-logos/2.png",
    "./images/company-logos/3.png",
    "./images/company-logos/4.png",
    "./images/company-logos/5.png",
    "./images/company-logos/6.png",
    "./images/company-logos/7.png",
  ];

  const slidesContainer = document.getElementById("slides-container");
  const dotList = document.getElementById("dot-list");
  const prevButton = document.querySelector(".slideLeft");
  const nextButton = document.querySelector(".slideRight");
  const slidesPerPage = 1;
  const totalSlides = images.length;
  const totalPages = Math.ceil(totalSlides / slidesPerPage);
  let currentIndex = 0;

  // Create slides
  images.forEach((image, index) => {
    const slide = document.createElement("li");
    slide.className = "slide";
    slide.innerHTML = `<img src="${image}" alt="Slide ${index + 1}">`;
    slidesContainer.appendChild(slide);
  });

  // Create dots
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("li");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");
    dotList.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  const updateSlider = () => {
    const translateValue = -currentIndex * (100 / slidesPerPage);
    slidesContainer.style.transform = `translateX(${translateValue}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === Math.floor(currentIndex / slidesPerPage)
      );
    });
  };

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - slidesPerPage + totalSlides) % totalSlides;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + slidesPerPage) % totalSlides;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index * slidesPerPage;
      updateSlider();
    });
  });

  updateSlider();
});
