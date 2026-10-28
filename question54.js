// let a = 5
// let d = 3
// let n =10
// let arr =[]
// let currterm =a
// for (let i = 0; i < n; i++) {
//     arr.push(currterm)
//     currterm +=d
   
// }
// console.log(aqseq )


//  5,  8, 11, 14, 17,
//   20, 23, 26, 29, 32     



let a=2;
let d= 3;
let n =5
let arr =[] 
let currentTerm =a
for(let i =0;i<=n;i++){
    arr.push(currentTerm)
    currentTerm+=d
}
console.log(arr.join(" "))
