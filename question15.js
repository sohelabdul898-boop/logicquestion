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
let  orignalnum = 0
for (let n = 567; n >0; n = (n-(n%10))/10) {
     orignalnum = n
    digit = n%10
    sum +=digit**3
}
if (sum === orignalnum) {
    console.log("it is the  amstrong no")
}

else{
    console.log("its not amstrong num")
}