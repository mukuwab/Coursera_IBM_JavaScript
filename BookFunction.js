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
    
}//End function
