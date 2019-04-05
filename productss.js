let products = [] 
let cart = [] 

const loadProducts = () => { 
    products = [
    new Product(1, "My big fat pale ale","Pale Ale", "Medium amber", "Light malt flavour, with tropical and floral qualities. Dry and bitter aftertaste.", "50 DKK.", "330 ml.", "images/BeFunky-project.jpg"),
    new Product(2, "Pretty Fly for the Rye",  "Rye Beer", "Red Brown ", "Round spiciness from the rye, with a balanced malty sweetness.", "50 DKK.", "330 ml.", "images/images.jpg"),
    new Product(3, "Fsociety", "Brown Ale", "Dark brown", " Plum and raisins flavour, veering towards a serious nutty style.", "50 DKK.", "330 ml.", "images/download (2).jpg"), 
    new Product(4, "Game of Porters", "Porter", "Mahogany", "Light malt sweetness, dark fruit flavours with strong hits of coffee",  "50 DKK.", "330 ml.", "images/porter.jpg"), 
    new Product(5, "Legally Blonde", "Cider", "Rose", "Crisp and refreshing. Funky raspberries, pink apples and strawberries", "50 DKK.", "330 ml.", "images/porter.jpg"),
    new Product(6, "Danish Pie", "Pilsner", "Light", "Bitter qualities, with notes of lemongrass.", "50 DKK.", "330 ml.", "images/porter.jpg") 
    ]};

function getProducts() {
    return products 
}

loadProducts() 
const findProductbyID = (data, productID) => {
    const product = data.find((product) => {
        return product.productID === productID 
     })
return product 
}; 

//shopping cart

//create function that adds a product by its ID and its quantity to the shopping cart 

const addToCart = (productID, quant) => { 
    console.log(`$(productID} has been added ${quant} times`); 
    if (!findProductbyID(cart,productID)) {
        cart.push({...findProductbyID(products, productID), quantity: quant}) 
    } else { 
        findProductbyID(cart, productID).quanity += quant})  
    }
    saveCart()
}

//create function that loads the cart from localstorage 

const loadCart=function() { 
    if (localStorage.getItem('cart') === null) {
 }