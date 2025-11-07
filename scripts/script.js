// menu open-close
AOS.init();
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
// tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
// console.log(contents);

tabs.forEach((tab, idx) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    contents[idx].classList.add("active");
  });
});

// special-car slider
let specialSwiper = new Swiper("#multicar", {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-car",
    prevEl: ".prev-car",
  },
});

let specialSwiper2 = new Swiper("#singlecar", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-car",
    prevEl: ".prev-car",
  },
});

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