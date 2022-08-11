const input = document.querySelector("input");
const div = document.querySelector(".tasks__list");
let taskRemove;

input.addEventListener("change", (event) => {
  div.insertAdjacentHTML('beforeEnd',`<div class="task">
                                        <div class="task__title">
                                          ${input.value}
                                        </div>
                                        <a href="#" class="task__remove">&times;</a>
                                      </div>`);
  input.value = null;
  taskRemove = Array.from(document.querySelectorAll(".task__remove"));
  taskRemove.forEach(element => {
    element.addEventListener("click", () => element.closest(".task").remove());
  })
  event.preventDefault();
})
