let n=5
let totalRow=2 * n - 1
for (let row=1;row<=totalRow;row++){
    let diff = Math.abs(n - row)
    let space= " ".repeat(diff)
    let star="*".repeat(2*(n-diff)-1)
    console.log(space+star)
}
