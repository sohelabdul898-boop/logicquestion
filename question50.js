const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
]
const numrows = matrix.length
const numcol = matrix[0].length
console.log("Matrix")
for(let i =0;i<numrows;i++){
    console.log(matrix[i].join(""))
}
console.log("               ")

for(let i=0;i<numrows;i++){
    let rowsum = 0
    for(let j =0 ;j<numcol;j++){
        rowsum+=matrix[i][j]
    }
    console.log(`row: ${i+1}: ${rowsum}`)
}
console.log("          ")
console.log("column sum")
for (let j =0; j<numcol;j++){
    let colsum = 0
    for(let i = 0; i<numrows;i++){
        colsum += matrix[i][j]
    }
    console.log(`col: ${j+1} :${colsum}`)
}

