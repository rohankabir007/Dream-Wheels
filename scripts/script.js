// menu open-close

const openmenu = () => {
  const menu = document.querySelector(".pop-up");
  menu.classList.toggle("show");
};

// banner slider

const slides = document.querySelectorAll(".slides");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
const totalSlides = 3;

const next = () => {
  counter++;
  if (counter >= totalSlides) {
    counter = 0;
  }
  slideImage();
};

const prev = () => {
  counter--;
  if (counter < 0) {
    counter = totalSlides - 1;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// testimonial slider
let swiper = new Swiper(".multicard", {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

let swiper2 = new Swiper(".singlecard", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});