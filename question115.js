let arr  =[1,2,3,5,6,7,8]
let n = 8
let total = n*(n+1)/2
let sum = arr.reduce((a,b)=>a+b,0)
let missingvalue = total-sum
console.log(missingvalue)