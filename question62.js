let n =5
let sum =0
let currentFactorial = 1
for (let i=1;i<=n;i++){
    currentFactorial*=i
    sum+=currentFactorial
}
console.log(sum)
// output - 153