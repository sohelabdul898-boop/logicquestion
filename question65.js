let n= 145
let sum =0
for(let temp =n;temp>0;temp=Math.floor(temp/10)){
    let digit = temp%10
    let currfactorial = 1
    for(let i =1;i<=digit;i++){
currfactorial *=i
    }
    sum+=currfactorial
}
if (sum===n) {
    console.log("it is the strong no")
}else{
    console.log("it is not the strong no")
}
