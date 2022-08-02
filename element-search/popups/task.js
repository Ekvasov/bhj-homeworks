const showWindow = document.getElementById("modal_main");//первое окно
showWindow.className = "modal modal_active";//при запуске открывается первое окно
const showSecondWindowButton = document.querySelector("div#modal_main .btn");//кнопка в первом окне
const closeFirstWindow = document.querySelector("div#modal_main > div");//крестик в первом окне
const showSecondWindow = document.getElementById("modal_success");//второе окно
const closeSecondWindow = document.querySelector("div#modal_success .modal__close");//крестик во втором окне

showSecondWindowButton.onclick = function() {
  showWindow.className = "modal";
  showSecondWindow.className = "modal modal_active";
}

closeFirstWindow.onclick = function() {
  showWindow.className = "modal";
}

closeSecondWindow.onclick = function() {
  showSecondWindow.className = "modal";
}
