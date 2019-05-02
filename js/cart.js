var shoppingCart = getShoppingCart();

function addToCart(product) {

    const itemID = product.dataset.id;
    console.log(itemID)

    var cartItem = findProduct(itemID)
    //
    let exists = false;
    let index;

    //we create a for loop for the shopping cart to check if we already have an object with its id = itemID 

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === itemID) {
            exists = true;
            index = i;
        }
    }

    if (exists) {
        shoppingCart[index].quantity++
    } else {
        var lineItem = {
            img: cartItem.img,
            name: cartItem.name,
            price: cartItem.price,
            quantity: 1,
            id: itemID
        }
        shoppingCart.push(lineItem)
    }

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
    //create functionality that renders  our product 
    var cartInformation = "";

    for (i = 0; i < shoppingCart.length; i++) {
        cartInformation += renderLineItem(shoppingCart[i])

    }
    // shoppingCart[i].name + " costs " + shoppingCart[i].price + " DKK. <br>"
    // make a string that is html code to display correctly (tr td structure so that every element will get their own place)
    document.getElementById("cart-content").innerHTML = cartInformation;
}

function renderLineItem(item) {
    return "<tr>" +
        "<img src=\"" + item.img + "\" height=\"100\" width=\"50\" >" +
        "<td>" + item.name + "</td>" +
        "<td>" + item.price + "</td>" +
        "<td>" + item.quantity + "</td>" +
        '<button id="buybutton" onclick="addToCart(this)" data-id="' + item.id + '"> Buy </button>' +
        '<button id="removebutton" onclick="removeFromCart(this)" data-id="' + item.id + '"> Remove </button>' +
        "<a href=\"productDetails.html?id=" + item.id + "\">View details</a>" +
        "</tr>";
}


if (location.href.includes('cart.html')) {
    renderShoppingCart();

}


