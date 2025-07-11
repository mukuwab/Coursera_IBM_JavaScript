//ForEach Method
    //1.Iterates through arrays
    //2.Applies thr provided function to each element
    //3.Useful for performing specific actions
    //4.Doesn't create a new array
    
//Sends a welcome email to each user

function sendWelcomeEmail (email){
    console.log('welcome email sent to ${email}');
}//end sendWelcomeEmail
const users = [
    //Creates an array called users containing name and email
    {name: 'Alice', email: 'alice@example.com'}
    {name: 'Bob', email: 'bob@example.com'}
    {name: 'Charlie', email: 'charlie@example.com'}
    
];//end array:users

users.forEach(user) => {
    //arrow function takes the current user object as a parameter
    //users.ForEach iterates through the array
    //Then calls the sendWelcome Email function with each iteration
    snedWelcomeEmail(user.email);
}

    
