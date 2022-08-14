const btn = document.getElementById("tasks__add");
const input = document.querySelector("input");
const div = document.querySelector(".tasks__list");

function addTask(event) {
  event.preventDefault();
  input.value = input.value.trim();
  if(input.value === "") {
    return;
  }

  div.insertAdjacentHTML('afterbegin',`<div class="task">
                                        <div class="task__title">
                                          ${input.value}
                                        </div>
                                        <a href="#" class="task__remove">&times;</a>
                                      </div>`);
  input.value = null;

  let deleteBtn = document.querySelector(".task__remove");
  deleteBtn.addEventListener("click", () => {
    deleteBtn.closest(".task").remove();
  })
}

btn.onclick = addTask;
input.addEventListener("keydown", (item) => {
  if(item.code === "Enter") {
    addTask();
  }
})
