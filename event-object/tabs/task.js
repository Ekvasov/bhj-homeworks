const btns = Array.from(document.querySelectorAll(".tab"));
const content = Array.from(document.querySelectorAll(".tab__content"));
let btnsActive = document.querySelector(".tab_active");
let contentActive = document.querySelector(".tab__content_active");

function changeContent() {
  btnsActive.className = "tab";
  this.className = "tab tab_active";
  btnsActive = this;
  contentActive.className = "tab__content";
  content[btns.indexOf(this)].className = "tab__content tab__content_active";
  contentActive = content[btns.indexOf(this)];
}

btns.forEach(element => element.addEventListener("click", changeContent))
