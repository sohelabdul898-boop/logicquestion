let a = 0
let b = 1
let rows = 5
for (let i = 1; i <= rows; i++) {
    let arr = []
    for (let j = 1; j <=i; j++) {
        arr.push(a)
        let nextTerm = a + b
        a = b
        b = nextTerm 

    }
    console.log(arr.join("  "))
}
// 0
// 1  1
// 2  3  5
// 8  13  21  34
// 55  89  144  233  377