//FilterMethod
    //Creates a new array
    //Contains elements that pass specific conditions
    //Extracts specific data
    
//Filter books published in the last five years

const products = [
    
    {name: "Laptop", price: 100},
    {name: 'Smartphone', price: 500},
    {name: 'Tablet', price: 300},
    {name: 'Moniter', price: 250},
    {name: 'Keyboard', price: 50}
];

function filterProductsByPriceRange(products, minPrice, maxPrice){
    return products.filter(product) => product.price >= minPrice && product.price <= maxPrice);
}

const minPrice = 100;//Minimum price threshold
const maxPrice = 500; //Maximum price 

const.filteredProducts = filterProductsByPriceRange(prodcutsm minPrice, maxPrice);

filteredProducts.forEach((product) =>{
    
    console.log(`${product.name} is of $${product.price}`);
});
    
