const text = Array.from(document.querySelectorAll(".rotator__case"));
let number = 1;

function enterText() {
  text.forEach(element => element.classList.remove("rotator__case_active"));
  text[number].classList.add("rotator__case_active");
  number++;
  if(number === text.length) {
    number = 0;
  }
}

setInterval(enterText, 1000);
