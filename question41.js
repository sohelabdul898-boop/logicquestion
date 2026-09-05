let n = 125
let sum = 0
do {
    let digit = n%10
    sum = sum+digit
   n= Math.floor(n/10)
} while (n>0);
console.log(sum)