let a =0
let b =1
let n =10
let sum =0
for (let i =0;i<n; i++){
    sum += a
    let newterm =a+b
    a=b
    b= newterm
    
}
console.log(sum)