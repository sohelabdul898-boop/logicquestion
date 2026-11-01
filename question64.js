// let n =10
// let x=2
// let sum =x
// let currterm = x
// for(let i =2;i<=n;i++){
//     currterm = currterm*(-x)/i
//     sum+=currterm
// }
// console.log(sum)

// output - 0.86462


// for(let i=1;i<=100;i++){
//     if(i%5!==0){
//          console.log(i) 
//     }
   
// }

let n=12345;
let sum=0;
let digit =0;
for(let i=1;i<=n;n=(n-digit)/10){
digit=n%10;
sum+=digit
}
console.log(sum)













