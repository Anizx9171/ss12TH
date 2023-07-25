let a = 0;
let b = 1;
for (let i = 0; i < 20; i++) {
    if (i==0) {
        console.log(a)
    }
    else if (i==1) {
        console.log(b)
    }
    else{
        let c = a+b
        a = b
        b = c
        console.log(c)
    }
    
}