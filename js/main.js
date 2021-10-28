"use strict";

const openOnlineList = document.querySelector(".open-online-user");
const onlineList = document.querySelector(".online-chat ");

openOnlineList.addEventListener("click", () => {
  openOnlineList.classList.toggle("active");
  onlineList.classList.toggle("active");
});
