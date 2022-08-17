let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if(xhr.readyState === xhr.DONE) {
    const text = JSON.parse(xhr.responseText);
    const pollTitle = document.getElementById("poll__title");
    pollTitle.innerHTML = `${text.data.title}`;

    const answers = text.data.answers;
    const pollAnswers = document.getElementById("poll__answers");
    answers.forEach(element => {
      pollAnswers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">
                                                    ${element}
                                                  </button>`);
    })
    
    const pollAnswer = Array.from(document.querySelectorAll(".poll__answer"));
    pollAnswer.forEach(element => {
      element.onclick = () => alert("Спасибо, ваш голос засчитан");
    })
  }
})
