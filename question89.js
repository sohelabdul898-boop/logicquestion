let count=1;
for(let i=1;i<=7;i++){
    let arr=[]
    for(let j=1;j<=i;j++){
        arr.push(count%10)
        count++;
    }
    console.log(arr.join(' '))
}