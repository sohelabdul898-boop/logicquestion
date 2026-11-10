let arr = [10,20,10,30,20,10,40,30]
let frequency ={}

for(let i=0;i<arr.length;i++){
    if (frequency[arr[i]]) {
       frequency[arr[i]]= frequency[arr[i]]+1
    }
    else{
        frequency[arr[i]] =1
    }

   
}
console.log(frequency)