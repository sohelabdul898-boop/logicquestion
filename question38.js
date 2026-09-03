let n = 10
let count = 0
let a = 0
let b = 1
let arr = []
do {
    arr.push(a)
    let nexterm = a + b
    a = b
  b =  nexterm 
    count++
} while (count < n);
console.log(arr.join('  '))