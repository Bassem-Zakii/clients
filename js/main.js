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
