"use strict";

// navbar active links

const navLinks = document.querySelectorAll("aside nav ul a");
const navBtn = document.querySelector("aside .sidebar-btn");
const navList = document.querySelector("aside");

navLinks.forEach((links) => {
  links.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  if (navBtn.classList.contains("active")) {
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
  }
});