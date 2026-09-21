let n =15
let result=[];
for(let i =1;i<=n;i++){
    let count = i.toString(2).split("1").length-1
    if(count%2===0){
result.push(i)
    }
   
}
 console.log(result.join("   "))