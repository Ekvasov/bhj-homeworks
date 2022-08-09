const chat = document.querySelector(".chat-widget");
const input = document.querySelector(".chat-widget__input");
const chatMessages = document.querySelector(".chat-widget__messages");
let robotMessages = ["Вы не купили ни одного товара, для того, чтобы так с нами разговаривать!",
                    "Кто тут!?",
                    "Где ваша совесть?",
                    "Добрый день, до свидания!",
                    "Мы ничего не будем вам продавать!",
                    "К сожалению, все операторы сейчас заняты. Не пишите нам больше!",
                    "Ты кто?",
                    "Где ваша совесть?"];

const beautifulTime = (element) => {
  if(element < 10) {
    return "0" + element;
  }
  return element;
}


chat.addEventListener("click", () => {
  chat.classList.add("chat-widget_active");
})

input.addEventListener("change", () => {
  let arrNumber = Math.floor(Math.random() * robotMessages.length);
  let messageDate = new Date();
  let messageTime = beautifulTime(messageDate.getHours()) + ":" + beautifulTime(messageDate.getMinutes());

  chatMessages.innerHTML += `
  <div class="message  message_client">
    <div class="message__time">${messageTime}</div>
    <div class="message__text">${input.value}</div>
  </div>
  `;

  chatMessages.innerHTML += `
  <div class="message">
    <div class="message__time">${messageTime}</div>
    <div class="message__text">${robotMessages[arrNumber]}</div>
  </div>
  `;
  input.value = null;
})
