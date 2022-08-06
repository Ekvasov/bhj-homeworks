
const div = Array.from(document.querySelectorAll(".reveal"));

const activeText = (e) => {
  const { top, bottom } = e.getBoundingClientRect();
  if((bottom < 0) || (top > window.innerHeight)) {
    return false;
  }
  return true;
}

div.forEach(element => {
  setInterval(() => {
    if(activeText(element) === true) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  }, 100)
})
