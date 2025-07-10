//Creating Custom Objects

function Car(make,model,year){
    //there are three parameters in the function: make,model,and year
    
    //make,model,and year(parameters) are only temporary names for whats passed into the function
    
    //in order to add a property to the car object by that name you have to do : 
        //this.parameterName = parameterName
    
    this.make = make;
    //adds a property called 'make' to the Car object sets it to what ever is passed into the make parameter
    
    this.model = model;
    
    this.year = year;
    
    this.getName = function(){
        
        return this.make + '' + this.model +'' + this.year ;
        
        //the 'this keyword makes sure each Car object keeps its own values, as multiple car objects can be made from this constructor
        
    }//end getName
    
    
}//End Car

var c = new Car ("Meridian", "Saber GT", "2012");
alert(c.getName()); //displays "Meridian Saber GT 2012"

//alert() is a built-in JavaScript function that pops up a small browser dialog box with a message.
