// let n =98765;
let revresd = 0;
let lastdigit =0
// while (n>0) {
//     let lastdigit = n%10;
//     revresd =  (revresd*10)+ lastdigit
//     n = (n-lastdigit)/10
// }
// console.log(revresd)
for (let n = 98765; n >0; n=(n-lastdigit)/10) {
lastdigit = n%10
revresd = (revresd*10)+lastdigit;

}
console.log(revresd)
