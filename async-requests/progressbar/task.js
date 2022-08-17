const progress = document.getElementById('progress');
progress.value = 0;
let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  formData = new FormData();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  
  const idInterval = setInterval(() => {
    if (!xhr.upload.onload) {
      if (progress.value < 0.9) {
        progress.value += 0.09;
      }
    }
  }, 110)

  if(xhr.upload) {
    xhr.upload.addEventListener("load", (e) => {
      clearInterval(idInterval);
      if (e.lengthComputable) {
        progress.value = 1;
      }
    });
  xhr.send(formData);
  }
})
