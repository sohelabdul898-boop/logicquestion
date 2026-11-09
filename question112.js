let arr = [10,20,10,30,40,20,50,30]
let unqiuearr =[]
for(let i =0;i<=arr.length;i++){
    if (!unqiuearr.includes(arr[i])) {
        unqiuearr.push(arr[i])
    }
    
}
console.log(unqiuearr.join(' '))