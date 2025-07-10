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
