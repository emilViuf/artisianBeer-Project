var shoppingCart = getShoppingCart();

function addToCart(product) {
    const itemID = product.dataset.id;
    console.log(itemID)

    var cartItem = findProduct(itemID)
    var lineItem = {
        img: cartItem.img,
        name: cartItem.name,
        price: cartItem.price
    }

    shoppingCart.push(lineItem)
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}


function getShoppingCart() {
    if (localStorage.getItem('shoppingCart') === null) {
        shoppingCart = [];
    } else {
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }

    return shoppingCart
};


function renderShoppingCart() {

    //create functionality that renders our product 
    var cartInformation = "";

    for (i = 0; i < shoppingCart.length; i++) {
        cartInformation += shoppingCart[i].name + " costs " + shoppingCart[i].price + " DKK."
    };
    // make a string that is html code to display correctly (tr td structure so that every element will get their own place)

    document.getElementById("cart-content").innerHTML = cartInformation;

}

renderShoppingCart(); 
