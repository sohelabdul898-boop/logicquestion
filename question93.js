let count=65;
for(let i=1;i<=5;i++){
    let arr=[]
    let charIn= (2*i)-1
    for(let j=1;j<=charIn;j++){
        arr.push(count)
        count++
    }
    let space="".repeat(5-i)
    console.log(space+arr.map(num=>String.fromCharCode(num)).join(' '))
}