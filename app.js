"use strict";

const btnMenuOpen = document.querySelector(".btn-menu-open");
const btnMenuClose = document.querySelector(".btn-menu-close");
const navItems = document.querySelector(".nav-items");

btnMenuOpen.addEventListener("click", function (e) {
  e.currentTarget.classList.add("hidden");
  btnMenuClose.classList.remove("hidden");
  navItems.classList.add("active");
  console.log(e.currentTarget);
});

btnMenuClose.addEventListener("click", function () {
  btnMenuClose.classList.add("hidden");
  btnMenuOpen.classList.remove("hidden");
  navItems.classList.remove("active");
});
