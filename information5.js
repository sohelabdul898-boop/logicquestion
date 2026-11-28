//inheritance - in these it was use the properties and method of the another class 
//main key word is extend it used for inheritance
//ex-
class animal{
    eat(){
        console.log("Animal is eating")
    }
}
class dog extends animal{
    bark(){
        console.log("dog is barking")
    }
}
const Dog = new dog()
    Dog.eat()
    Dog.bark()
