const amountClick = document.getElementById("clicker__counter");
let changeAmountClick = +amountClick.textContent;
const picture = document.getElementById("cookie");

picture.onclick = function() {
  changeAmountClick++;
  amountClick.textContent = changeAmountClick;
  if ((changeAmountClick % 2) === 0) {
    picture.width = 200;
  } else {
    picture.width = 300;
  }
}
