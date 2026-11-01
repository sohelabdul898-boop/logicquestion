let user = [1,0,2,3,4]
let sum =0;
let n=5;
for(let i =0;i<n;i++){
    if(user[i]===0){
        continue;
    }
    sum+=user[i]
}
console.log(sum)