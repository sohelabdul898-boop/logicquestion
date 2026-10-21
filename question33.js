let largest =0
let n;
do {
    n = parseInt(prompt("enter the no"))
    if (largest < n) {
        largest =n
    }
} while (n!==0);
console.log(largest)
// output when we enter the 39 and then 45 it was compare and the largest number is 45