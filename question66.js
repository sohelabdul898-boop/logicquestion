let even =[]


for(let i =1;i<=100;i++){
    let sum =0
    let num =i
    while (num>0) {
        sum+=num%10
        num = Math.floor(num/10)
    }
    if (sum%2==0) {
        even.push(i)
    }
    
}
console.log(even.join('   '))