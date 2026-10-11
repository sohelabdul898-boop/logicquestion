let n =5
let totalrow =2*n-1
for(let row=1;row<=totalrow;row++){
    let col = (row<=n) ? row : (2*n-row)
    console.log("*".repeat(col))
}