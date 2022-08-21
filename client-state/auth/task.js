const form = document.querySelector("form");
const userId = document.getElementById("user_id");
const welcome = document.getElementById("welcome");

function welcomeUser() {
  userId.textContent = localStorage.id;
  welcome.classList.add("welcome_active");
}

if(localStorage.id !== null) {
  welcomeUser();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
      if((JSON.parse(xhr.responseText)).success) {
        localStorage.setItem('id', (JSON.parse(xhr.responseText)).user_id);
        welcomeUser();
      } else {
        alert("Неверный логин/пароль");
      }
    }
  })

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  const formData = new FormData(form);
  xhr.send(formData);
})
