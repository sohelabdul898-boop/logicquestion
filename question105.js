let arr =[12,5,15.18,20,45,89]
let largest =arr[0]
for(let i=1;i<=arr.length;i++){
    if (arr[i]>largest) {
        largest = arr[i]
    }
}
console.log(largest)