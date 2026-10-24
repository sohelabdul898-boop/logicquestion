let n =10;
for(let i =1;i<=n;i++){
let factorCount =0;
for(let j=1;j<=i;j++){
    if(i%j===0){
factorCount++
    }

}
console.log(factorCount)
}