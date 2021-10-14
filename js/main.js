"use strict";

// Navbar menu show and hide navbar menu in mobile

const navBtn = document.querySelector(".logo-menu .nav-btn");
const menuList = document.querySelector(".logo-menu nav ul");

navBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
  navBtn.classList.toggle("active");
});

// when you click outside navbar and navbar open button remove class active

const html = document.querySelector("html");

html.addEventListener("click", function (e) {
  if (e.target !== navBtn && e.target !== menuList) {
    navBtn.classList.remove("active");
    menuList.classList.remove("active");
  }
});

// active link in menu

const navLinks = document.querySelectorAll(".logo-menu nav li a");
const section = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 255;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let anchor = document.querySelector(`header nav a[href*="${id}"]`);
        anchor.classList.add("active");
      });
    }
  });
});

// section question-answer show and hide each question

const faqs = document.querySelectorAll(".question-answer li");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
