let n = 1;
let sum = 0;
while (n != 0) {
  n = +prompt("Nhập 1 số nguyên");
  if (n % 2 == 0) {
    sum += n;
  }
}
alert("Tổng các số vừa nhập là : " + sum);
