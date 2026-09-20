let n =5
for(let i=1;i<=n;i++){
    let arr =[]
    for(let j=1;j<i;j++){
        arr.push(i*i)
    }
    console.log(arr.join(" "))
}