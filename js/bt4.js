for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i <= j) {
      document.write("*");
    } else {
      document.write(" ");
    }
  }
  document.writeln();
}
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 9; j++) {
    if (i + j >= 6 && j-i <=4) {
      document.write("*");
    } else {
      document.write(" ");
    }
  }
  document.writeln();
}
