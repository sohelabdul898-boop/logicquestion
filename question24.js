// let n = 4279
// let smallest = 9
// while (n > 0) {
//     let digit = n % 10
//     if (digit < smallest) {
//         smallest = digit;
//     }
//     n = Math.floor(n/10)
// }
// console.log(smallest)
let smallest  = 9
let digit =0
for (let n = 4279;  n>0; n = (n-digit)/10 ) {
     digit = n%10
    if (digit < smallest) {
        smallest =digit
    }
}
console.log(smallest)