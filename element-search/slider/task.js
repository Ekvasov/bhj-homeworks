const prev = document.querySelector(".slider__arrow_prev");//влево
const next = document.querySelector(".slider__arrow_next");//вправо
const sliders = Array.from(document.querySelectorAll(".slider__item"));//массив картинок
let sliderNumber = sliders.findIndex(item => item.className === "slider__item slider__item_active");//номер активной картинки

next.onclick = function() {
  if(sliderNumber < sliders.length - 1) {
    sliders[sliderNumber].className = "slider__item";
    sliderNumber++;
    sliders[sliderNumber].className = "slider__item slider__item_active";
  } else {
    sliders[sliderNumber].className = "slider__item";
    sliderNumber = 0;
    sliders[sliderNumber].className = "slider__item slider__item_active";
  }
}

prev.onclick = function() {
  if(sliderNumber > 0) {
    sliders[sliderNumber].className = "slider__item";
    sliderNumber--;
    sliders[sliderNumber].className = "slider__item slider__item_active";
  } else {
    sliders[sliderNumber].className = "slider__item";
    sliderNumber = sliders.length - 1;
    sliders[sliderNumber].className = "slider__item slider__item_active";
  }
}
