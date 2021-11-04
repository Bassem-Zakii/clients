"use strict";

const openOnlineList = document.querySelector(".open-online-user");
const onlineList = document.querySelector(".online-chat");

openOnlineList.addEventListener("click", () => {
  openOnlineList.classList.toggle("active");
  onlineList.classList.toggle("active");
});

// CLoseing online list by click outside

const html = document.querySelector("html");

html.addEventListener("click", function (e) {
  const removeOnlineList = e.target.closest(".open-online-user");
  if (!removeOnlineList && e.target !== onlineList) {
    openOnlineList.classList.remove("active");
    onlineList.classList.remove("active");
  }
});
