let arr = [0,10,0,20,30,0,40]
let arr2 =arr.filter((num)=>num !== 0)
let find = arr.filter((num)=>num === 0)
let combine = [...arr2, ...find]
console.log(combine)