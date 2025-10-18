document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".myCategorySwiper", {
    slidesPerView: 4,            // 👈 vždy vidíš 4 karty
    slidesPerGroup: 1,           // 👈 posun o 1 kartu
    spaceBetween: 40,            // 👈 gap-10 (40px)
    loop: false,
    centeredSlides: false,
    navigation: {
      nextEl: ".category-next",
      prevEl: ".category-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 12 },
      640: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 40 }, // desktop = gap-10
    },
  });
});
