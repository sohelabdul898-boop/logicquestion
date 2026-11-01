let n= 20
for(let a=1; a<=n;a++){
    for(let b =a+1;b<=n;b++){
        let c = Math.sqrt( a*a + b*b)
        if(Number.isInteger(c) && c<=n){
console.log(`${a} ${b} ${c}`)
        }
    }
}
// ouput:-
// 3 4 5
// 5 12 13
// 6 8 10
// 8 15 17
// 9 12 15
// 12 16 20