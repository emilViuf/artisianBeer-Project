const products = [new Product(1, "My big fat pale ale", "Pale Ale", "Medium amber", "Light malt flavour, with tropical and floral qualities. Dry and bitter aftertaste.", 50, "330 ml.", "images/BeFunky-project.jpg"),
new Product(2, "Pretty Fly for the Rye", "Rye Beer", "Red Brown ", "Round spiciness from the rye, with a balanced malty sweetness.", 50, "330 ml.", "images/images.jpg"),
new Product(3, "Fsociety", "Brown Ale", "Dark brown", " Plum and raisins flavour, veering towards a serious nutty style.", 50, "330 ml.", "images/download (2).jpg"),
new Product(4, "Game of Porters", "Porter", "Mahogany", "Light malt sweetness, dark fruit flavours with strong hits of coffee", 50, "330 ml.", "images/porter.jpg"),
new Product(5, "Legally Blonde", "Cider", "Rose", "Crisp and refreshing. Funky raspberries, pink apples and strawberries", 50, "330 ml.", "images/porter.jpg"),
new Product(6, "Danish Pie", "Pilsner", "Light", "Bitter qualities, with notes of lemongrass.", 50, "330 ml.", "images/porter.jpg")]

function findProduct(productID) {
    const product = products.find(product => product.productID == productID);
    return product;
};

var query = 'ab';
console.log(products.filter(product => product.type.includes(query)));

