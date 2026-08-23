//  let n = 452;
let count = 0
let digit = 0
// while (n>0) {
//     let digit = n%10
//     count = count +1
//     n = (n-digit)/10
// }
// console.log(count)

for (let n = 425; n >0; n=(n-digit)/10) {
    digit = n%10
    count =count +1

}
console.log(count)


// output - count of the given no is 3