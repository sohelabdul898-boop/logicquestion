let a =0
let b = 1
let n = 10
let arr = []
let sum =0
// let cuurenterm = b
for (let i = 1; i <=n;i++){
    arr.push(a)
    let nexttrem = a+b
    a=b
    b = nexttrem
    sum+=a
   
}
console.log(`fibonaci series :${arr.join(' ')}`)
console.log(`sum:${sum}`)

// fibonaci series :0 1 1 2 3 5 8 13 21 34
// sum:143
