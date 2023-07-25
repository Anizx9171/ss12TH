let count = 1;
let number;

let random = Math.round(Math.random() * 9) + 1;
console.log(random);
while (count <= 3) {
  number = +prompt("Nhập số muốn đoán  1-10");
  if (count == 3) {
    if (number == random) {
      alert("you win");
      break;
    } else {
      alert("you lose");
    }
  } else {
    if (number == random) {
      alert("you win");
      break;
    } else if (number < random) {
      alert(`Lơn hơn ${number} , bạn còn ${3 - count} lần`);
    } else {
      alert(`Bé hơn ${number} , bạn còn ${3 - count} lần`);
    }
  }
  count++;
}
