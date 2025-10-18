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
  }, // ← tady chyběla čárka!
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




// Category Swiper
const categorySwiper = new Swiper(".myCategorySwiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: false,
  speed: 800,
  navigation: {
    nextEl: ".category-next",
    prevEl: ".category-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

// Přepínání kategorií
document.querySelectorAll('.category-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    // Odstranit active ze všech
    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    // Přidat active na kliknutý
    this.classList.add('active');
    
    // Zde můžete přidat logiku pro filtrování karet podle kategorie
    const category = this.getAttribute('data-category');
    console.log('Selected category:', category);
  });
});