let arr = [45,89,5,30,20,67]
for(let i=0;i<arr.length;i++){
for(let j=0;j<arr.length-i-1;j++){
    if (arr[j]>arr[j+1]) {
       let tem = arr[j] 
       arr[j] = arr[j+1]
       arr[j+1] = tem
       
    }
}
}
console.log(arr)
// we use to solve these problem using the bubble sort