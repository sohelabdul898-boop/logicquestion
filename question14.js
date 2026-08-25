// let n =567;
// let product =0
// while (n>0) {
//     let digit =n%10
//     product = product+digit
//     n =(n-digit)/10
// }
// console.log(product)


let digit =0
let product = 0
for (let n = 567; n>0; n =(n-digit)/10) {
    digit = n%10
    product =product+digit
}
console.log(product)
