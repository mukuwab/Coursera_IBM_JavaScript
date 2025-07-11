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
    {name: 'Alice', email: 'alice@example.com'}
    {name: 'Bob', email: 'bob@example.com'}
    {name: 'Charlie', email: 'charlie@example.com'}
    
];//end array:users

users.forEach(user) => {
    snedWelcomeEmail(user.email);
}

    
