let n =" 153"

let total = 0
let originalnum = parseInt(n);
let num = originalnum
let nod = (String(num)).length
do {
    let digit = num%10
    total =total + digit**nod
    num = (num -digit)/10
} while (num>0);
if (originalnum===total) {
    console.log("it is the amstrong no")
} else {
   console.log("it is not the amstrong  no") 
}