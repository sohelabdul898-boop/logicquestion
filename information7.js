//Abstraction - means hiding internal implimentation and show the essantial functionality
//ex -
class car{
    start (){
        this.#startengine();
        console.log("car started")
    }
    #startengine(){
        console.log("engine has started")
    }
}
const Car = new car()
Car.start()