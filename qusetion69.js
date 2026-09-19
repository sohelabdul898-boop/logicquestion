// let n =100
// for(let i=1;i<=n;i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }
for(let i=1;i<=100;i++){
    let cuurNo= i
    let sumofdigit=0
    while (cuurNo>0) {
        sumofdigit+=cuurNo%10
        cuurNo =Math.floor(cuurNo/10)
    }
    if (sumofdigit%3===0) {
        console.log(i)
    }
}