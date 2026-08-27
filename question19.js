// let n =10
// let count = 0
// let a = 0
// let b =1
// let arr =[]
// while (count<n) {
//     arr.push(a)
//     let neaxtterm = a+b

//     a=b

//     b = neaxtterm

//     count++;
// }
// console.log(`faboncci series up to ${n} term :`)
// console.log(arr.join("  ")) 


let n =10;
let a =0
let b = 1
let arr = []
for (let count = 0; count <n ; count++){
    arr.push(a)
    let nextterm = a+b
    a=b
    b =nextterm
}
console.log(`faboncci series up to ${n} term :`)
console.log(arr.join("  ")) 