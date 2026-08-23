// let n = 452;
let product = 1;
let digit =0
// while (n>0) {
//     let digit = n%10
//     product=product*digit;
//     n = (n-digit)/10
// }
// console.log(product)
for (let n = 452; n >0; n=(n-digit)/10) {
     digit = n%10
    product =product*digit
    
}
console.log(product)





// output- product of the give no 40