const MENU_CLOSED_CLASS_NAME = "page-nav--closed";
const TOGGLE_OPENED_CLASS_NAME = "user-facilities__button-toggle--opened";

const headerToggler = document.querySelector(".user-facilities__button-toggle");
const pageNav = document.querySelector(".page-nav");

pageNav.classList.remove("page-nav--nojs");
headerToggler.classList.remove("user-facilities__button-toggle--nojs");
headerToggler.classList.remove(TOGGLE_OPENED_CLASS_NAME);

let isOpened = false;

headerToggler.addEventListener("click", function () {
  isOpened = !isOpened;
  pageNav.classList.toggle(MENU_CLOSED_CLASS_NAME, !isOpened);
  headerToggler.classList.toggle(TOGGLE_OPENED_CLASS_NAME, isOpened);
});
