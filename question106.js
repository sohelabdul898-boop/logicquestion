let arr = [12,3,5,13,45,64,98]
let smallest= arr[0]
for(let i =1;i<=arr.length;i++){
    if (arr[i] < smallest) {
        smallest =arr[i]
    }
}
console.log(smallest)