for(let i=1 ;i<=10;i++){
    let arr=[]
    for(let j=1;j<i;j++){
        if(i%2==0){
            arr.push("*")
        }
    }
    console.log(arr.join(" "))
}