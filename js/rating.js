// Variables

let submit_btn = document.querySelector(".rating-container__submit-btn");
let rating_1 = document.querySelector(".rating-1");
let rating_2 = document.querySelector(".rating-2");
let rating_btns = document.querySelectorAll(".rating-container__btn");
let rating_score = document.querySelector(".rating-container__selected-score");

// Transition from 1 card to another when pressing submit btn.
const onSubmit = () => {
  rating_1.classList.add("hidden");
  rating_2.classList.remove("hidden");
};
submit_btn.addEventListener("click", onSubmit);

// Select a rating score

let stars_score = 3;

const selectScore = (event) => {
  stars_score = event.target.textContent; // Con estos metodos se consigue el valor escrito en los botones.
  rating_score.textContent = stars_score; // Y con esto se logra poner el numero seleccionado.
};

rating_btns.forEach((btn) => {
  btn.addEventListener("click", selectScore); // El forEach ejecuta una funcion por aca elemento (En este caso los botones).
});
