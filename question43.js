let n =12345
let sum = 0
do{
let digit = n%10
if (digit%2!==0) {
    sum = sum+digit
}
n = Math.floor(n/10)
}while(n>0)
    console.log(sum)