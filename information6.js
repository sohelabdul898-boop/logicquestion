// ploymorphism - one method having different behaviour depending on the object using it
class Animal {
    sound(){
        console.log("Animal make the sound ")
    }
}
class dog extends Animal{
    sound(){
        console.log("dogs make the sound")
    }
}
class cat extends Animal{
    sound(){
        console.log("cats makes the sound")
    }
}
const Dog = new dog()
const Cat = new cat()
Cat.sound();
Dog.sound()