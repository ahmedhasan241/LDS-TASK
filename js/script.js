const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    enabled: true,
    delay: 5000,
  },

  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    370: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    670: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const dropdown = document.querySelector(".drop-down");

const list = document.querySelector(".list");

const selectedImg = document.querySelector(".selectedImg");

dropdown.addEventListener("click", () => {
  list.classList.toggle("show");
});

list.addEventListener("click", (e) => {
  const img = e.target.querySelector("img");

  selectedImg.src = img.src;
});

const card = document.querySelector(".video-contain");
const video = card.querySelector(".video-slide");

card.addEventListener("mouseenter", () => {
  video.play();
});

card.addEventListener("mouseleave", () => {
  video.pause();
});
