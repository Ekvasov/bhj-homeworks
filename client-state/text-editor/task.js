const textarea = document.getElementById("editor");
const savedText = localStorage.getItem('text');

let saveText = function() {
  textarea.addEventListener("input", () => {
    localStorage.setItem('text', textarea.value);
  })
}

if(savedText) {
  textarea.value = savedText;
  saveText();
} else {
  saveText();
}
