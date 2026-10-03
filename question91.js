for(let i =65;i<=69;i++){
    let arr =[]
    for(let j=65;j<=i;j++){
        arr.push(i)
    }
    console.log(arr.map(num=>String.fromCharCode(num)).join(' '))
}