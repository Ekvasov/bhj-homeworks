const btn = document.querySelector(".dropdown__value");
const btns = Array.from(document.querySelectorAll(".dropdown__link"));

function changeName() {
  if(btn.nextElementSibling.className === "dropdown__list") {
    btn.nextElementSibling.className = "dropdown__list dropdown__list_active";
  } else {
    btn.nextElementSibling.className = "dropdown__list";
  }
}

function toClose(event) {
  btn.textContent = this.textContent;
  btn.nextElementSibling.className = "dropdown__list";
  event.preventDefault();
}

btn.addEventListener("click", changeName);

btns.forEach(element => {
  element.addEventListener("click", toClose);
});
