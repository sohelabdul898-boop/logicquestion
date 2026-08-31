let n =4567
let digit =0
let reverse =0
do {
    digit = n%10
    reverse = (reverse*10)+digit
    n = (n-digit)/10
} while (n>0);
console.log(reverse)