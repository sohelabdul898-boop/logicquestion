// let string = "sohel"
// let count =0
// for(let i =0;i<=string[i].length;i++){
//     if (string[i]==="a"||string[i]==="e"||string[i]==="i"||string[i]==="o"||string[i]==="u") {
//         count++;
//     }

// }
// console.log(count)

// let n =100;
// for(let i =1;i<=n;i++){
//     let temp=i;
//     let digitsum =0;
//    while(temp>0){
// digitsum+=temp%10;
// temp = Math.floor(temp/10)
//     }  
//     if(digitsum %3 ===0){
// console.log(i)
//     }
// }


// for(let i =1;i<=5;i++){
//     console.log(i*i)
// }
// for (let i = 1; i <= 1000; i++) {
//     let sum = 0
//     for (let j = 1; j < i; j++) {
//         if (i % j === 0) {
//             sum += j
//         }
//     }
//     if (sum === i) {
//         console.log(i)
//     }
// }
// let maxsum = 0;
// let maxno = 0
// for (let i = 1; i <= 100; i++) {
//     let sum = 0
//     let tem = i;
//     let digit = 0;
//     while (tem > 0) {
//         digit =  tem% 10;
//         sum += digit
//         tem = Math.floor(tem / 10)
//     }
//     if (sum > maxsum) {
//         maxsum = sum
//         maxno = i
//     }

// }
// console.log("maxno:", maxno)
// console.log("maxsum:", maxsum)

let n =10;

for(let i =1;i<=n;i++){
    let count =0;
    let BinaryConvert = i.toString(2)
   for(let j =0;j<=BinaryConvert.length;j++){
 if (BinaryConvert[j]==="1") {
    count++
 }
   }
   if (count%2===0) {
    console.log(i)
   }
  
}