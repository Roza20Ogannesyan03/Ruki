const arrow = document.querySelector(".scroll-arrow");

window.onscroll = function (e) {
  if (window.scrollY >= window.screen.height) {
    arrow.style.visibility = "visible";
  }
  if (window.scrollY < window.screen.height) {
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
if (document.querySelector('.cookie')) {
  document.querySelector('.cookie').addEventListener("click", function () {
    this.style.display = 'none'
  })
}




const rez = document.querySelector('.modal');
const black = document.querySelector('.PermalinkOverlay');

document.querySelector('.feedback-btn').addEventListener('click', function () {
  rez.style.display = 'block';
  black.classList.add('black');
});


const close = document.querySelector(".close__img");
if (close) {
  close.addEventListener('click', function () {
    rez.style.display = 'none';
    black.classList.remove('black');
  });
}
