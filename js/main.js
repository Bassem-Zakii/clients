"use strict";

// toggle navbar in tablet and mobile

const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector("nav");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("btn-active");
  navBtn.classList.toggle("active");
});

// add and remove class active on links

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// page animation

const htmlAnimate = document.querySelectorAll(
  ".slide-up, .slide-RtL, .slide-LtR"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains("slide-up")) {
      entry.target.classList.add("show-slide-up");
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("slide-RtL")
    ) {
      entry.target.classList.add("show-slide-RtL");
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("slide-LtR")
    ) {
      entry.target.classList.add("show-slide-LtR");
    }
  });
});

htmlAnimate.forEach((el) => {
  observer.observe(el);
});
