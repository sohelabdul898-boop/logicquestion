let n =5
for(let i =1;i<=5;i++){
    let rowString="";

    for(let j=1;j<=i;j++){
        rowString+= j + " "
    }
    for(let j=i-1;j>=1;j--){
        rowString+= j + " "
    }
    console.log(rowString)
}