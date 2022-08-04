const btn = document.querySelector(".dropdown__value");
const btns = Array.from(document.querySelectorAll(".dropdown__item"));

function changeName() {
  this.nextElementSibling.className = "dropdown__list dropdown__list_active";
}

function close() {
  btn.nextElementSibling.className = "dropdown__list";
  btn.textContent = this.textContent;
  return false;
}

btn.addEventListener("click", changeName);

btns.forEach(element => {
  element.addEventListener("click", close);
});
