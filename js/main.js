"use strict";

// Navbar menu show and hide navbar menu in mobile

const navBtn = document.querySelector(".logo-menu .nav-btn");
const menuList = document.querySelector(".logo-menu nav ul");

navBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

// section question-answer show and hide each question

const faqs = document.querySelectorAll(".question-answer li");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
