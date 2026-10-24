let a = 56
let b = 98
 while (b!=0) {
    let tem = b
    b = a%b
    a = tem
 }
 console.log(a)

// let c =56
// // let b =98
// for(let b= 98; b!=0;){
//     let tem =b
//     b = a%b
//     c=tem
// }
// console.log(a)

// output - hcf of these no is 14