let n= 20
for(let a=1; a<=20;a++){
    for(let b =a+1;b<=n;b++){
        let c = Math.sqrt( a*a + b*b)
        if(Number.isInteger(c) && c<=n){
console.log(`${a} ${b} ${c}`)
        }
    }
}