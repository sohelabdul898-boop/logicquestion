// debounce function
function debounce(fn, delay) {
    let timer;
    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this,arg)
        }, delay)
    }
}

function search(query) {
    console.log("Api is called:", query)
}
const debouncesearch = debounce(search, 500)
//rapid typing 
debouncesearch("hi");
debouncesearch("he");
debouncesearch("hel");
debouncesearch("hell");
debouncesearch("hello");
// debounce is the technique that delay the execution of function until the user stop performing an action for specfic amount of time