const btn = document.getElementById("menu-btn");
const x = document.getElementById("close");
const nav = document.getElementById("menu");

function navToggle() {
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}
btn.addEventListener("click", navToggle);
x.addEventListener("click", navToggle);
