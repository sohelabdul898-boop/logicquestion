//encapsulation - wrapping data(properti) and method together in one unit(class)
//ex - 
class Bankaccount{
    #balance =1000;
    deposit(amount){
        this.#balance+=amount
    }
    getBalance(){
        return this.#balance;
    }
}
const account= new Bankaccount()
account.deposit(500)
console.log(account.getBalance())