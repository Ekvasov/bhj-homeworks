
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if(xhr.readyState === xhr.DONE) {
    const loader = document.getElementById("loader");
    loader.className = "loader";
    const data = JSON.parse(xhr.responseText);//делаем полученные данные удобными для обработки
    const dataArray = Object.entries(data.response.Valute);//преобразуем полученные данные в массив для удобства их обработки
    const items = document.getElementById("items");

    dataArray.forEach(element => {
      items.innerHTML += `<div class="item">
                          <div class="item__code">
                            ${element[1].CharCode}
                          </div>
                          <div class="item__value">
                            ${element[1].Value}
                          </div>
                          <div class="item__currency">
                            руб.
                          </div>
                        </div>`
    })
  }
})
