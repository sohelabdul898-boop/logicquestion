// let n = 98765;
// let orignalnum = n
let reverse = 0;
let lastdigit =0
let originalnum = 0
// while (n>0) {
//     let lastdigit =n%10
//     reverse = (reverse*10) + lastdigit
//     n= (n-lastdigit)/10
// }
// let palindrome = (orignalnum === reverse)
// console.log(palindrome)
for (let n = 98765; n >0;n= (n-lastdigit)/10 ) {
let originalnum = n
    
     lastdigit =n%10
    reverse = (reverse*10) +lastdigit
}
let palindromenum = (originalnum === reverse)
console.log(palindromenum)