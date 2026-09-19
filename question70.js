for(let i=1;i<=1000;i++){
    let sum =0
    let tem=i
    let sumofdigit= String(i).length
while(tem>0){
sum+=Math.pow(tem%10,sumofdigit)
tem =Math.floor(tem/10)
}
if (sum===i) {
    console.log(i)
}
}