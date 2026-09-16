for(let i =1;i<=500;i++){
    let originalnum =i
    let reversed =0
    let tem = i
    while (tem>0) {
        let digit = tem%10
        reversed = (reversed*10)+digit
        tem = Math.floor(tem/10)
    }
    if (originalnum===reversed) {
        console.log(i)
    }
}