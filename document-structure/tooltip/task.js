const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach(element => {
  element.addEventListener("click", (event) => {
    //удаление предыдущей подсказки
    const tooltip = document.querySelector(".tooltip");
    if(tooltip !== null) tooltip.remove();
    //создание новой подсказки
    element.insertAdjacentHTML('afterBegin',`<div class="tooltip tooltip_active">${element.title}</div>`);
    //определение позиции подсказки
    const tooltip_2 = document.querySelector(".tooltip");
    const place = element.getBoundingClientRect();
    tooltip_2.setAttribute("data-position", "bottom");
    tooltip_2.setAttribute("style", `left: ${place.left}px; top: ${place.bottom}px;`);
    event.preventDefault();
  })
})
