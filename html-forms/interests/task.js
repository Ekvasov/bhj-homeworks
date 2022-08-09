const interestCheck = Array.from(document.querySelectorAll(".interest__check"));

function checkElements() {
  const parent = this.closest(".interest");
  const children = Array.from(parent.querySelectorAll(".interest__check"));
  children.forEach(item => item.checked = this.checked);
}

interestCheck.forEach(element => {
  element.addEventListener("change", checkElements);
})
