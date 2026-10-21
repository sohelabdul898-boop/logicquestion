//  let n =567
//  let orignalnum = n
//  let sum =0
//  while (n>0) {
//     let digit =n%10
//     sum+=digit**3
//     n = (n-(n%10))/10
//  } 
//  if (sum === orignalnum) {
//         console.log("it is a amstrong no")
//     }
//     else{
//         console.log("it is not a amstrong no")
//     }

let sum =0 
let digit =0
let count =0
let i=153
for(let temp = i; temp>0; temp =Math.floor(temp/10)){
  count++  //count+1
}
for (let n =i; n >0; n = (n-digit)/10) {
    digit = n%10
    sum +=digit**count
}
console.log(sum)

 if (sum === i) {
     console.log("it is the  amstrong no")
}

 else{
    console.log("its not amstrong num")
}