var products = []; 

var beer1 = new Product(1, "My big fat pale ale","Pale Ale", "Medium amber", "Light malt flavour, with tropical and floral qualities. Dry and bitter aftertaste.", "50 DKK.", "330 ml.", "images/BeFunky-project.jpg"); 
var beer2 = new Product(2, "Pretty Fly for the Rye",  "Rye Beer", "Red Brown ", "Round spiciness from the rye, with a balanced malty sweetness.", "50 DKK.", "330 ml.", "images/images.jpg"); 
var beer3 = new Product(3, "Fsociety", "Brown Ale", "Dark brown", " Plum and raisins flavour, veering towards a serious nutty style.", "50 DKK.", "330 ml.", "images/download (2).jpg"); 
var beer4 = new Product(4, "Game of Porters", "Porter", "Mahogany", "Light malt sweetness, dark fruit flavours with strong hits of coffee",  "50 DKK.", "330 ml.", "images/porter.jpg"); 
var beer5 = new Product(5, "Legally Blonde", "Cider", "Rose", "Crisp and refreshing. Funky raspberries, pink apples and strawberries", "50 DKK.", "330 ml.", "images/porter.jpg"); 
var beer6 = new Product(6, "Danish Pie", "Pilsner", "Light", "Bitter qualities, with notes of lemongrass.", "50 DKK.", "330 ml.", "images/porter.jpg"); 

products.push(beer1); 
products.push(beer2); 
products.push(beer3); 
products.push(beer4); 
products.push(beer5); 
products.push(beer6); 

function findProduct(productID){ 
const product = products.find(product => product.id === parseInt(productId, 10));
return product;  
}

