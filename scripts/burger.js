"use strict";

const burger = document.querySelector("#burger");
const line = document.querySelector(".burger__line");
const nav = document.querySelector("#nav");

document.addEventListener("click", (e) => {
  console.log(e.target.children[0]);
  if (e.target.id == "burger") {
    e.target.classList.toggle("burger_active");
    line.classList.toggle("display_none");
    nav.classList.toggle("header__nav_active");
  }
});
