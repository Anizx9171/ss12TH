let number = +prompt("Nhập vào 1 số");
let sum = 0;
for(let i = 1; i < number ;i++){
    if(number%i == 0){
        sum = sum+i;
    }
}

if(sum == number){
    alert("Là sô hoàn hảo")
}else{
    alert("Không là số hoàn hảo")
}




