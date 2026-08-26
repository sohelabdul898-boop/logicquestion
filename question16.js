let num = 28;
let sum =0;
 let i =1;
 while (i<num) {
    if (num%i ===0) {
       sum = sum+i 
    }
    i++;
 }
if (sum === num) {
    console.log("it is a perfect number")
 } else {     console.log("it is not the perfect no" )

 }

for (let i = 1; i < num; i++) {
    if (num%i === 0) {
        sum = sum+i;
    }

}
if (sum === num) {
    console.log("it is the perfect no")
} else {
    console.log("it is not a perfect no")
}

// Output - when we enter the 28 and that the ans is "it is the perfect no"