let n =30
let result = []
for (let i = 2; i <=n; i++) {
    let isprime = true
    for(let j =2;j<=Math.sqrt(i);j++){
        if(i%j===0){
            isprime =false
        }
    }
    if(isprime){
result.push(i)
    }
}
console.log(result)
