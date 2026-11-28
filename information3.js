// oops concepts - object oriented programming in these we can reuse, organized, and mnageble code 
//in these we write the code using object and classes

//class - its the blue print or templte that use to create the objects
//object -instance of class that contain properties and method 
//ex-
class car{
    constructor(brand,color){
this.brand = brand;
this.color = color;
    }
    start(){
        console.log("car is started")
    }
}
const car1 = new car("BMW","White")
console.log(car1.brand)
console.log(car1.color)
car1.start();