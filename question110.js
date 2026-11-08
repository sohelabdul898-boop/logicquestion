let arr =[25,10,80,45,60,90,35]
let largest = 0
let secondlargest = 0
for(let i =0;i< arr.length;i++){
    if (arr[i]>largest) {
        secondlargest =largest
        largest =arr[i]
    }
    if (arr[i]>secondlargest) {
    }
}
console.log(secondlargest)
// for(let i=0;i<arr.length;i++){
//     if (largest < secondlargest) {
//         secondlargest=arr[i]
//     }
// }
// console.log(secondlargest)