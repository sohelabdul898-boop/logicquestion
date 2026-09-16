let count = 0
for(let i=1;i<=500;i++){
    if (i%7===0&&i%5!==0) {
        count=count+1
    }
}
console.log(count)