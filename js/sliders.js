const swiper = new Swiper(document.getElementById("slider"), {
  navigation: {
    nextEl: ".swiper-button-next_sl",
    prevEl: ".swiper-button-prev_sl",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  speed: 1000,
  loop: true,
});

var swiper2 = new Swiper(document.getElementById("bouquet"), {
  //simulateTouch: true,
  navigation: {
    nextEl: ".bouquet__swiper-button-next",
    prevEl: ".bouquet__swiper-button-prev",
  },

  slidesPerView: "auto",
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  speed: 1000,
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    700: {
      spaceBetween: 30,
    },
  },
});

const product1 = new Swiper(document.getElementById("product1"), {
  navigation: {
    nextEl: ".product1__swiper-button-next",
    prevEl: ".product1__swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  speed: 1000,
  loop: true,
});

const product2 = new Swiper(document.getElementById("product2"), {
  navigation: {
    nextEl: ".product2__swiper-button-next",
    prevEl: ".product2__swiper-button-prev",
  },
  pagination: {
    el: ".product__bullet",
    type: "bullets",
  },
  speed: 1000,
  loop: true,
});

const product3 = new Swiper(document.getElementById("product3"), {
  navigation: {
    nextEl: ".product3__swiper-button-next",
    prevEl: ".product3__swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  speed: 1000,
  loop: true,
});

const product4 = new Swiper(document.getElementById("product4"), {
  navigation: {
    nextEl: ".product4__swiper-button-next",
    prevEl: ".product4__swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  speed: 1000,
  loop: true,
});



