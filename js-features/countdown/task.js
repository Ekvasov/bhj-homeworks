const timeValue = document.getElementById("timer");
let timeExpectation = timeValue.textContent;

newTimer = setInterval(function () {
  timeExpectation = timeExpectation - 1;
  timeValue.textContent = timeExpectation;
  if (timeExpectation === 0) {
    alert("Вы победили в конкурсе");
    clearInterval(newTimer);
  }
}, 1000);
