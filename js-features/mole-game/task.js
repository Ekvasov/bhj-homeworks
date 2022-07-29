
getHole = index => document.getElementById(`hole${index}`);
//создал функцию, которая по индексу возвращает нужный элемент

const killNumberMole = document.getElementById("dead");
const missNumberMole = document.getElementById("lost");
let killNumber = 0;
let missNumber = 0;


for (let i = 1; i < 10; i++) {
  getHole(i).onckick = check(i);
}
//при помощи цикла зарегистрировал для каждой лунки один и тот же обработчик событий, передающий в функцию
//check аргумент i. Не могу понять почему когда в 12 строке после check написать скобки, то функция check() запускается
//сразу 9 раз без кликов по норам, а если без скобок (как в нижнем примере), то всё ок (как в нижнем примере).

function check(j) {
  if (getHole(j).className === "hole hole_has-mole") {
    killNumber++;
    killNumberMole.textContent = killNumber;
  } else {
    missNumber++;
    missNumberMole.textContent = missNumber;
  }

  if (killNumber === 10) {
    alert("игрок победил");
    zeroing();
  } else if (missNumber === 5) {
    alert("game over");
    zeroing();
  }
}

function zeroing() {
  killNumber = 0;
  missNumber = 0;
  killNumberMole.textContent = killNumber;
  missNumberMole.textContent = missNumber;
}



/*holeNew1 = document.getElementById("hole1");
holeNew2 = document.getElementById("hole2");
holeNew3 = document.getElementById("hole3");
holeNew4 = document.getElementById("hole4");
holeNew5 = document.getElementById("hole5");
holeNew6 = document.getElementById("hole6");
holeNew7 = document.getElementById("hole7");
holeNew8 = document.getElementById("hole8");
holeNew9 = document.getElementById("hole9");

const killNumberMole = document.getElementById("dead");
const missNumberMole = document.getElementById("lost");
let killNumber = 0;
let missNumber = 0;

holeNew1.onclick = check;

function check() {
  if (holeNew1.className === "hole hole_has-mole") {
    killNumber++;
    killNumberMole.textContent = killNumber;
  } else {
    missNumber++;
    missNumberMole.textContent = missNumber;
  }

  if (killNumber === 10) {
    alert("игрок победил");
    zeroing();
  } else if (missNumber === 5) {
    alert("game over");
    zeroing();
  }
}

function zeroing() {
  killNumber = 0;
  missNumber = 0;
  killNumberMole.textContent = killNumber;
  missNumberMole.textContent = missNumber;
}*/
