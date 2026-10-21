let n  = parseInt(prompt("enter the no"))
let sum = 0
 let i = 1
 while (i<=n) {
    sum+=i;
     i+=2;
    
 }
 console.log(sum)

for (let i = 1;  i<=n; i+=2) {
    sum+=i
}
console.log(sum)
