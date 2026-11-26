//colosure
function outer(){
    let count =0
    return function inner(){
        count++;
        console.log(count)
    }
}
const result = outer();
result();
result();
// a closure is when an inner  function remember and access variable from its outer function,even after the outer functionhas finished exicuting