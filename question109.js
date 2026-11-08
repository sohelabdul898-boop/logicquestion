let arr =[10,-5,20,-8,0,15,-3,7]
let count =0
for(let i =0;i < arr.length;i++){
    if(arr[i] > 0){
        count++;
    }
    
}
console.log("Positive No",count)
count = 0
for(let i=0;i<=arr.length;i++){
    if (arr[i]< 0) {
       count++ 
    }
}
console.log("Negative No",count)
// Positive No 4
// Negative No 3
