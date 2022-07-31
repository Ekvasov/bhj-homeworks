getHole = index => document.getElementById(`hole${index}`);

const killNumberMole = document.getElementById("dead");
const missNumberMole = document.getElementById("lost");
let killNumber = 0;
let missNumber = 0;
let holeArray = [];//

for (let i = 1; i < 10; i++) {
   getHole(i).onclick = (event) => check();
}

function check() {
  if (event.target.classList.contains('hole_has-mole')) {
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
