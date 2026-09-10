let a =0
let b = 1
let n = 10
let aqseq = []
// let cuurenterm = b
for (let i = 1; i <=n;i++){
    aqseq.push(a)
    let nexttrem = a+b
    a=b
    b = nexttrem
}
console.log(aqseq.join("  "))