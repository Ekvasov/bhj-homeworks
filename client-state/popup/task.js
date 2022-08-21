const showWindow = document.getElementById("subscribe-modal");//первое окно
const closeFirstWindow = document.querySelector(".modal__close");//крестик в первом окне

if(document.cookie.includes("закрыто")) {
  console.log("hello");
} else {
  showWindow.classList.add("modal_active");
}

closeFirstWindow.onclick = function() {
  showWindow.className = "modal";
  document.cookie = "окно=закрыто";
}
