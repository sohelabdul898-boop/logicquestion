let arr =[10,15,20,25,30,35]

// let EvneNo = arr.filter((num)=>num %2===0)
// let sum =0
// for(let i =0;i<EvneNo.length;i++){
// sum +=EvneNo[i]
// }
// console.log(sum)

let sum = arr.filter((num)=>num%2===0).reduce((total,num)=>total+num,0)
console.log(sum)