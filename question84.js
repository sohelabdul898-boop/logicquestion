let row =5
for(let i=0;i< row;i++){
  let space = " ".repeat(row- i - 1)
  let star = "*".repeat(2*i+1)
  console.log(space + star)
}
