//Make a constructor that acts as a moke bank account

function BankAccount(username,balance){
    
    this.username = username;//assigns value passed through parameter as a property of the object
    this.balance = balance;
    
    this.deposit = function deposit(amount){
        this.balance += amount; // add to balance
        
    }
    
    this.withdraw = function withdraw(amount){
        
        if (amount <= this.balance) {
      this.balance -= amount; // subtract from balance
    } else {
      console.log("Insufficient funds");
    }
    
//You don’t need return in a constructor — the new keyword automatically returns the new object.
    
}

var newUser1 = new BankAccount("jondoe57",2000);

// console.log(newUser1.BankAccount()); is not correct — you’re calling a method named BankAccount but you don’t have one. The constructor itself is not a method on the object — it created the object.
