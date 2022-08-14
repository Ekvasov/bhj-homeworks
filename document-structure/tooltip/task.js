const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach(element => {
  element.addEventListener("click", (event) => {
    //удаление предыдущей подсказки
    event.preventDefault();
    const tooltip = document.querySelector(".tooltip");
    if(tooltip !== null) {
      if(element.title !== tooltip.innerText) {
        tooltip.remove();
      } else {
        tooltip.remove();
        return;
      }
    }
    addPromot(element);
  })
})

function addPromot(item) {
  //создание новой подсказки
  item.insertAdjacentHTML('afterEnd',`<div class="tooltip tooltip_active">
                                          ${item.title}
                                         </div>`);
  //определение позиции подсказки
  const tooltipNew = document.querySelector(".tooltip");
  const place = item.getBoundingClientRect();
  tooltipNew.setAttribute("data-position", "bottom");
  tooltipNew.setAttribute("style", `left: ${place.left}px; top: ${place.bottom}px;`);
}
