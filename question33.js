let largest =0
let n;
do {
    n = parseInt(prompt("enter the no"))
    if (largest < n) {
        largest =n
    }
} while (n!==0);
console.log(largest)