let row =5
for (let i =0;i<row;i++){
    let space = " ".repeat(row- i)
    let star="* ". repeat(i)
    console.log(space + star)
}