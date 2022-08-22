const textarea = document.getElementById("editor");
const savedText = localStorage.getItem('text');
textarea.value = savedText;
textarea.addEventListener("input", () => {
  localStorage.setItem('text', textarea.value);
})
