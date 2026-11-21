let str ="aabbbcde"
let result = str.split("").find((char)=>{
   return str.indexOf(char) === str.lastIndexOf(char)
})
console.log(result)