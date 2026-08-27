 let n = 29
//  let i =2
 let isprime  = true;
 if (n<=1) {
    isprime = false;
 }
// while (i<=n) {
//     if (i%n===0) {
//         isprime=false
//         break;
//     }
//     i++;
// }
// if(isprime){
//     console.log(i +"is the prime no")
// }
// else{
//     console.log(i +"it is the prime no")
// }

for (let i = 2; i < n; i++) {
    if (n%i===0) {
        isprime=false
        break
    }
    
}
if (isprime) {
    console.log(n +"it is the prime no")
} else {
    console.log( n +"it is not the prime no")
}