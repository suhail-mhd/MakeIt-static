'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector(".nav-open-btn");
const navbarCloseBtn = document.querySelector(".nav-close-btn");

// navbarOpenBtn.addEventListener("click", function () {
//   elemToggleFunc(navbar);
// });

// navbarCloseBtn.addEventListener("click", function () {
//   elemToggleFunc.remove(navbar);
// });

navbarOpenBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

navbarCloseBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});



// go top variable
const goTopBtn = document.querySelector("[data-go-top]");

// window scroll event for go top button
window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});