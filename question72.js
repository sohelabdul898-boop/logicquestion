let num =34567898756;
let evenno =0
let oddno = 0
let n= Math.abs(num)
while (n>0) {
    let digit = n%10
    if (digit%2===0) {
        evenno+=digit
    }else{
        oddno+=digit
    }
    n = Math.floor(n/10)
}
console.log(`evenno:${evenno} oddno:${oddno}`)
