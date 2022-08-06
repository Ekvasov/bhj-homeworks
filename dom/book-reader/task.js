const book = document.querySelector(".book");
const fontSize = Array.from(document.querySelectorAll(".font-size"));

function clear() {
  fontSize.forEach(element => {
    element.classList.remove("font-size_active");
  })
}

fontSize[0].addEventListener("click", () => {
  clear();
  book.className = "book book_fs-small";
  fontSize[0].classList.add("font-size_active");
  return false;
});

fontSize[1].addEventListener("click", () => {
  clear();
  book.className = "book";
  fontSize[1].classList.add("font-size_active");
  return false;
});

fontSize[2].addEventListener("click", () => {
  clear();
  book.className = "book book_fs-big";
  fontSize[2].classList.add("font-size_active");
  return false;
});
