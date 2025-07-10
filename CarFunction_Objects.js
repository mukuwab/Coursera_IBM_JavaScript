//Creating Custom Objects

function Car(make,model,year){
    //there are three argumnets in the function: make,model,and year
    
    this.make = make;
    
    this.model = model;
    
    this.year = year;
    
    this.getName = function(){
        
        return this.make + '' + this.model +'' + this.year ;
        
    }//end getName
    
    
}//End Car

var c = new Car ("Meridian", "Saber GT", "2012");
alert(c.getName()); //displays "Meridian Saber GT 2012"
