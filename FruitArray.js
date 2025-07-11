//Array Indexing Practice

//Remeber that an array starts at index 0

//You have several fruits in a row on the shelf
let fruits = ["apple","banana","pineapple"];

//List the fruits in order

console.log("The fruits on the shelf are (in order):");

console.log("1st: "+fruits[0]);
console.log("2nd: "+fruits[1]);
console.log("3rd: "+fruits[2]);


//Now we want to add a new fruit. Use the PUSH method

fruits.push("cherry");
console.log("\nAfter Adding Fruit\n4th: "+fruits[3]);


//Now remove that last index using the pop method
fruits.pop();//Will remove the newly added 'cherry' string in the last index
console.log("\nAfter removing the last index (4th item)\n4th: "+fruits[3]+"\nThe cherry has been removed!");


//How many fruits do you have now? 
//use the 'length' property to find out

let numFruits = fruits.length;
console.log("\nThere are "+numFruits+" fruits!")

//Add more fruits!
fruits.push("watermelon","blueberry","dragon fruit");

//Now how many?
numFruits = fruits.length;//To store new values within the numFruits variable
console.log("\nThere are "+numFruits+" fruits!")

//use a for loop to print out all fruits
for(let i=0; i<fruits.length; i++){
    
    console.log(fruits[i])
    //'i' will increment after every iteration of the loop
    //the new value of i will act as the index
    
}//End for

//use a for loop to remove three fruits from the row
while (fruits.length > 3) {
  fruits.pop();
}

console.log("\nAfter removing 3 fruits")

for(let i=0; i<fruits.length; i++){
    
    console.log(fruits[i])
    //'i' will increment after every iteration of the loop
    //the new value of i will act as the index
    
}




