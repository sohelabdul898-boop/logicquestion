for(let i=1;i<=1000;i++){
    let sum =0
    for(let j=1 ;j<=i/2;j++){
        if (i%j===0) {
            sum+=j
        }
    }
    if(sum===i&&i!==0){
console.log(i)
    }
}