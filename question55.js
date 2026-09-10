let a = 5
let CommonRatio = 3
let n =10
let aqseq = []
let cuurenterm = a
for(let i =0;i <n; i++){
    aqseq.push(cuurenterm)
    cuurenterm =cuurenterm*CommonRatio
}
console.log(aqseq.join("  "))