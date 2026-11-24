let arr = [10,20,30,40,50,10,20]
let seen = new Set()
let duplicate = new Set()
for(let num of arr){
    if (seen.has(num)) {
        duplicate.add(num)
    }else{
        seen.add(num)
    }
}
console.log([...duplicate])
