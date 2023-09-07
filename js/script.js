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
  spaceBetween: 5,
  breakpoints: {
    // when window width is >= 320px
    700: {
      spaceBetween: 30,
    },
  },
});

const arrow = document.querySelector(".scroll-arrow");

console.log(window.screen.height);
window.onscroll = function (e) {
  if (window.scrollY >= window.screen.height) {
    console.log(window.scrollY);
    arrow.style.visibility = "visible";
  }
  if (window.scrollY < window.screen.height) {
    console.log(window.scrollY);
    arrow.style.visibility = "hidden";
  }
};

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector(".navigation");
const body = document.body;
const bar = document.querySelectorAll(".bar");
const phone = document.querySelector(".number");
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  if (hamb.classList.contains("active")) {
    bar.forEach((item) => (item.style.background = "white"));
  } else {
    bar.forEach((item) => (item.style.background = "#cfb595"));
  }

  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
  popup.appendChild(phone);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
