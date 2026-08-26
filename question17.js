// let i = 2;
// while (i<=100) {
//     let j =2;
//     let isprime = true;
//     while (j<i) {
//         if (i%j==0) {
//             isprime =false
//         }
//         j++
//     }
//     if (isprime) {
//         console.log(i)
//     }
//     i++;
// } 

for (let i = 2; i <=100; i++) {
    let isprime = true;
    for (let j = 2; j < i; j++) {
        if (i%j==0) {
            isprime = false
        }
        
    }
    if (isprime) {
        console.log(i)
    }
    
}