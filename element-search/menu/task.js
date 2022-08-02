const openMenu = Array.from(document.querySelectorAll('.menu__link'));//элементы с классом menu__link

openMenu.forEach((element) => {
  element.onclick = function() {
    if (element.nextElementSibling !== null) {
    element.nextElementSibling.className = "menu menu_sub menu_active";
    return false;
    }
  }
})
