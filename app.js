"use strict";

const imageList = document.querySelectorAll(".item-image img");
const modal = document.querySelector(".modal");
const modelInner = document.querySelector(".modal-inner");

function zoomHandler(event) {
  showModal(event.target.src);
}

imageList.forEach((el) =>
  el.addEventListener("click", (event) => zoomHandler(event))
);

function showModal(img) {
  modelInner.style.background = `center/contain no-repeat url(${img})`;
  modal.classList.toggle("active");
}

modal.addEventListener("click", showModal);
