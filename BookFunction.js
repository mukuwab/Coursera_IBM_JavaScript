//Book Constructor Practice

//Create Book Constructor
function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.checkOut = function(){
        let isCheckedOut = true;
        let isReturned = false;
    }//End checkOut
    
    this.returnBook = function(){
        isReturned = true;
        isCheckedOut =false;
    }//End return book
        
    this.getStatus = function(){
        if(isReturned == true){
            console.log("The book is returned");
        }
        else if (isCheckedOut == true){
            console.log("This book has been checked out");
        }
        else if(isCheckedOut == false){
            console.log("This book has not been checked out");
        }
        else if(isReturned ==false){
            console.log("This book has not been returned")
        }
    }//End getStatus

}//End function

Book1 = new Book("The Hornet's Nest", "Ella Gray", 23);
console.
