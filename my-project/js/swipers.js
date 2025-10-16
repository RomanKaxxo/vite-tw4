 // inicializace testimonial Swiperu
  const testimonialSwiper = new Swiper(".myTestimonialSwiper", {
    loop: true,
    speed: 1600,
    effect: "slide",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#nextEl",
      prevEl: "#prevEl",
    },
    on: {
      init() {
        updateDots(this.realIndex);
      },
      slideChange() {
        updateDots(this.realIndex);
      },
    },
  });

  // funkce pro přebarvení teček
  function updateDots(activeIndex) {
    const dots = document.querySelectorAll("#custom-dots .dot");
    dots.forEach((dot, i) => {
      dot.style.backgroundColor =
        i === activeIndex % dots.length ? "#53B8FF" : "#D2D2D2";
    });
  }

  // klikání na tečky → přepnutí slidu
  document.querySelectorAll("#custom-dots .dot").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      testimonialSwiper.slideToLoop(i); // slideToLoop přepne na odpovídající slide
      updateDots(i);
    });
  });



  const swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1600,
  effect: "slide",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init() {
      updateDots(this.realIndex);
    },
    slideChange() {
      updateDots(this.realIndex);
    },
  },
});

