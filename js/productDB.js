const products = [new Product(1, "Funky Town", "Pale Ale", "Medium amber", "Light malt flavour, with tropical and floral qualities. Dry and bitter aftertaste.", 50, "330 ml.", "images/paleale.jpg"),
new Product(2, "Cuz I Rye", "Rye Beer", "Red Brown ", "Round spiciness from the rye, with a balanced malty sweetness.", 50, "330 ml.", "images/rye.jpg"),
new Product(3, "Nutcracker", "Brown Ale", "Dark brown", " Plum and raisins flavour, veering towards a serious nutty style.", 50, "330 ml.", "images/brownale.jpg"),
new Product(4, "Devilishly dark", "Porter", "Black", "Light malt sweetness, dark fruit flavours with strong scent of coffee", 50, "330 ml.", "images/porter.jpg"),
new Product(5, "Rise & Shine", "Cider", "Rose", "Crisp and refreshing. Funky raspberries, pink apples and strawberries", 50, "330 ml.", "images/cider.jpg"),
new Product(6, "Hygge", "Pilsner", "Light", "Bitter qualities, with notes of lemongrass.", 50, "330 ml.", "images/pilsner.jpg"),
new Product(7, "Silky Wheat" , "Wheat Beer", "Golden", "Silky mouthfeel, with a refreshing splash of citrus.", 50, "330 ml.", "images/wheat.jpg"),
new Product(8, "Finesse" , "Brown IPA", "Medium brown", "Hints of toffee and stone fruit.", 50, "330 ml.", "images/ipa.jpg"),
new Product(9, "Chocolate Addict", "Chocolate stout", "Mahogany", "Noticeable flavours of dark chocolate and roasted malt.", 50, "330 ml.", "images/stout.jpg")]


function findProduct(productID) {
    const product = products.find(product => product.productID == productID);
    return product;
};

var query = 'ab';
console.log(products.filter(product => product.type.includes(query)));

