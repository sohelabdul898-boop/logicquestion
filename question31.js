let n =457
let count = 0
let digit =0
do {
    digit =n%10
    
    count =count+1
    console.log(count)
    n= (n-digit)/10
    
} while (n > 0);