let n =121
let num =n
let result =0
do {
    let digit = num%10
    result = (result*10)+digit
    num = (num-digit)/10
} while (num!==0);
if (n===result) {
    console.log("Its is the palindrome no")
} else {
    console.log("its not the palindrome no")
}