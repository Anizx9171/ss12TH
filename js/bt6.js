let sum = 0;
let count = 0;
let n = 1;
while (count < 30) {
    if (n % 7 == 0) {
        sum += n
        count++
    }
    n++
}
console.log(sum);