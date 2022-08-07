
const book = document.querySelector(".book");
const fontSize = Array.from(document.querySelectorAll(".font-size"));

function changeFontSize(event) {

  fontSize.forEach(element => {
    element.classList.remove("font-size_active");
  })

  if(this.classList.contains("font-size_small")) {
    book.className = "book book_fs-small";
    this.classList.add("font-size_active");
  }

  if(this.className === "font-size") {
    book.className = "book";
    this.classList.add("font-size_active");
  }

  if(this.classList.contains("font-size_big")) {
    book.className = "book book_fs-big";
    this.classList.add("font-size_active");
  }

  event.preventDefault();
}

fontSize.forEach(element => {
  element.addEventListener("click", changeFontSize);
})
