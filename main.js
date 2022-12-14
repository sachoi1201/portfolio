"use strict";

//Make progressbar
const progressValue = document.querySelector(".progress__value");

document.addEventListener("scroll", function () {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progressbarPer = (scroll / height) * 100;
  progressValue.style.width = `${progressbarPer}%`;
});
//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
// Handle Logo when clicking
const navbarLogo = document.querySelector(".navbar__logo");
navbarLogo.addEventListener("click", () => {
  scrollIntoView("#home");
});
// Handle scrollinig when topping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});
// Make work button
const workProject = document.querySelector(".work__projects");
let Now = 1;
document.querySelector(".btn1").addEventListener("click", function () {
  workProject.style.transform = "translateX(0vw)";
  Now = 1;
});

document.querySelector(".btn2").addEventListener("click", function () {
  workProject.style.transform = "translateX(-100vw)";
  Now = 2;
});

document.querySelector(".btn3").addEventListener("click", function () {
  workProject.style.transform = "translateX(-200vw)";
  Now = 3;
});
// Make mouse event for Work
let startPosition = 0;
let isPress = false;
const work1 = document.querySelector(".work1");
const work2 = document.querySelector(".work2");
const work3 = document.querySelector(".work3");

work1.addEventListener("mousedown", function (e) {
  startPosition = e.clientX;
  isPress = true;
});
work1.addEventListener("mousemove", function (e) {
  if (isPress == true && e.clientX - startPosition < 0) {
    workProject.style.transform = `translateX(${e.clientX - startPosition}px)`;
  }
});
work1.addEventListener("mouseup", function (e) {
  isPress = false;
  workProject.style.transition = "all 0.5s";
  if (e.clientX - startPosition < -300) {
    workProject.style.transform = "translateX(-100vw)";
  } else {
    workProject.style.transform = "translateX(0vw)";
  }
  setTimeout(() => {
    workProject.style.transition = "all 300ms ease-out";
  }, 500);
});

work2.addEventListener("mousedown", function (e) {
  startPosition = e.clientX;
  console.log(startPosition);
  isPress = true;
});
work2.addEventListener("mousemove", function (e) {
  if (isPress == true) {
    workProject.style.transform = `translateX(${e.clientX - startPosition}px)`;
  }
});
work2.addEventListener("mouseup", function (e) {
  isPress = false;
  workProject.style.transition = "all 0.5s";
  if (e.clientX - startPosition < -300) {
    workProject.style.transform = "translateX(-200vw)";
  } else {
    workProject.style.transform = "translateX(-100vw)";
  }
  setTimeout(() => {
    workProject.style.transition = "all 300ms ease-out";
  }, 500);
});

work3.addEventListener("mousedown", function (e) {
  startPosition = e.clientX;
  console.log(startPosition);
  isPress = true;
});
work3.addEventListener("mousemove", function (e) {
  if (isPress == true && e.clientX - startPosition > 0) {
    workProject.style.transform = `translateX(${e.clientX - startPosition}px)`;
  }
});
work3.addEventListener("mouseup", function (e) {
  isPress = false;
  workProject.style.transition = "all 0.5s";
  if (e.clientX - startPosition > 300) {
    workProject.style.transform = "translateX(-100vw)";
  } else {
    workProject.style.transform = "translateX(-200vw)";
  }
  setTimeout(() => {
    workProject.style.transition = "all 300ms ease-out";
  }, 500);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});
// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make friend section hide when clicking toggle button
const toggleBtn = document.querySelector(".testimonials__toggle");
const toggleBtn1 = document.querySelector(".testimonials__btn1");
const toggleBtn2 = document.querySelector(".testimonials__btn2");
const testimonials = document.querySelector(".testimonials");
let btnNow = 2;
toggleBtn.addEventListener("click", function () {
  if (btnNow == 2) {
    btnNow = 1;
    toggleBtn1.style.display = "block";
    toggleBtn2.style.display = "none";
    testimonials.style.display = "flex";
  } else {
    btnNow = 2;
    toggleBtn1.style.display = "none";
    toggleBtn2.style.display = "block";
    testimonials.style.display = "none";
  }
});
// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
