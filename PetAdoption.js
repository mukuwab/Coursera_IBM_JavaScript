//Pet Adoption 

function Pet(name, species, sex, age){
    
    this.name = name;
    this.species = species;
    this.sex = sex;
    this.age = age;
    
    this.describe = function(){
        console.log(`${name} is a ${age}-year old ${sex} ${species}`);
    }
}//end function:Pet

const AdoptablePets = [
    
    {name: "Martha", species: "dog", sex: "female", age: 2},
    {name: "Sammy", species: "cat", sex: "male", age:5},
    {name: "Mitten", species: "cat", sex: "female", age: 2},
    {name: "Opal", species: "cat", sex: "female", age: 3},
    {name: "Pecker", species: "bird", sex: "male", age: 4},
    {name: "Apollo", species: "bird", sex: "max", age: 4},
      
    ];
    
AdoptablePets.forEach((Pet)=>{
    describe();
});
