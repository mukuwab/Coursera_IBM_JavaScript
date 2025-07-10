//Make a constructor that acts as a moke bank account

function BankAccount(username,balance){
    
    this.username = username;//assigns value passed through parameter as a property of the object
    this.balance = balance;
    
    this.deposit = function deposit(amount){
        this.balance += amount; // add to balance
        
    }//End deposit
    
    this.withdraw = function withdraw(amount){
        
         if (amount <= this.balance) {
          this.balance -= amount; // subtract from balance
        } //end if
        
        else {
          console.log("Insufficient funds");
        }//end else
        
    }//End withdraw
    
    //function for displaying the name and balance
    this.getNameBalance = function(){
        
        return "The username of this account is "+username+" \nThe balance of this account is "+balance;
        
    }//End this.getNameBalance
    
    
        //NO RETURN
        //You don’t need return in a constructor — the new keyword automatically returns the new object.
    
}//End function
    

var newUser1 = new BankAccount("jondoe57",2000);
console.log(newUser1.getNameBalance());

newUser1.deposit(500); // adds 500
newUser1.withdraw(1000); // subtracts 1000
// console.log(newUser1.BankAccount()); is not correct — you’re calling a method named BankAccount but you don’t have one. The constructor itself is not a method on the object — it created the object.
