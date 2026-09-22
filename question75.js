let num =898
let value =0
let n = Math.abs(num)
while(n>0){
    let digit =n%10
    value+=digit;
    n=Math.floor(n/10)
}
console.log(value)