// let n =4279
// let largestno = 0
// while(n>0){
//     let digit = n%10
//     if(digit > largestno){
// largestno = digit
//     }
//     n = Math.floor(n/10)
// }
// console.log(largestno)
let largestnos = 0
for(let n =4279 ; n>0; n= Math.floor(n/10)){
let digit = n%10
if (digit>largestnos) {
    largestnos =digit
}
}
console.log(largestnos)