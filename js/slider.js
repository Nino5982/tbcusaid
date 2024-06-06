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
  let slidesPerPage = 3;
  let currentIndex = 0;
  const totalSlides = images.length;
  let totalPages = Math.ceil(totalSlides / slidesPerPage);
  let intervalId;

  let startX = 0;
  let endX = 0;

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

  const autoAdvanceSlider = () => {
    if (currentIndex + slidesPerPage >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex += slidesPerPage;
    }
    updateSlider();
  };

  const startAutoAdvance = () => {
    intervalId = setInterval(autoAdvanceSlider, 5000);
  };

  const stopAutoAdvance = () => {
    clearInterval(intervalId);
  };

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

  // Start auto-advancing slides
  startAutoAdvance();

  // Stop auto-advancing on slider interaction
  slidesContainer.addEventListener("mouseover", stopAutoAdvance);
  slidesContainer.addEventListener("touchstart", stopAutoAdvance);

  // Add touch event listeners for mobile horizontal scrolling
  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", () => {
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      // Minimum swipe distance
      if (diffX > 0) {
        // Swiped left
        currentIndex = (currentIndex + slidesPerPage) % totalSlides;
      } else {
        // Swiped right
        if (currentIndex === 0) {
          currentIndex =
            totalSlides - (totalSlides % slidesPerPage || slidesPerPage);
        } else {
          currentIndex =
            (currentIndex - slidesPerPage + totalSlides) % totalSlides;
        }
      }
      updateSlider();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex =
        totalSlides - (totalSlides % slidesPerPage || slidesPerPage);
    } else {
      currentIndex = (currentIndex - slidesPerPage + totalSlides) % totalSlides;
    }
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex + slidesPerPage >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex += slidesPerPage;
    }
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index * slidesPerPage;
      updateSlider();
    });
  });

  function clearDots() {
    let ul = document.getElementById("dot-list");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
}


  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      slidesPerPage = 1;
    } else {
      slidesPerPage = 3;
    }
    totalPages = Math.ceil(totalSlides / slidesPerPage);

    clearDots();
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("li");
      dot.className = "dot";
      if (i === Math.floor(currentIndex / slidesPerPage))
        dot.classList.add("active");
      dotList.appendChild(dot);
    }
    updateSlider();
  });

  updateSlider();
});
