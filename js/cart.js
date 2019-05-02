var shoppingCart = getShoppingCart();

function addToCart(product) {

    const itemID = product.dataset.id;
    console.log(itemID)

    var cartItem = findProduct(itemID)
    //
    let exists = false;
    let index;

    //we create a for loop for the shopping cart to check if we already have chosen product, an object with itemID  
    // equal to id of a product in our products catalogue
    
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === itemID) {
            exists = true;
            index = i;
        }
    }
    // if the condition holds true, then exists is true, the index of our lineItem gets attributed i
    // if exists is true, then we increase by 1 the quantity of our lineItem

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
    //if exists is false, we then create a new lineItem, which we push into our shoppingCart 

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}
    //

//we make a function that gets the shopping cart from localStorage and checks if there is any lineItem there 
//if there is none, then it will show an empty shoppingCart 
//else we get the linteItem from localStorage and attribute it to shoppingCart

function getShoppingCart() {    
    if (localStorage.getItem('shoppingCart') === null) {
        shoppingCart = [];
    } else {
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    return shoppingCart
};



function renderShoppingCart() {
    //create functionality that renders  our shoppingCart 
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
        '<button id="addproduct" onclick="addToCart('+ item.id + ')" data-id="' + item.id + '"> + </button>' +
        '<button id="removeproduct" onclick="minusCart('+ item.id + ')" data-id="' + item.id + '"> - </button>' +
        '<button id="removebutton" onclick="removeFromCart('+ item.id +')" data-id="' + item.id + '"> Remove </button>' +
        "<a href=\"productDetails.html?id=" + item.id + "\">View details</a>" +
        "</tr>";
}

/* var removeButtons = document.getElementById('removebutton')
console.log(removeButtons); 
for (i = 0; i < removeButtons.length; i++) {

}
 */

function minusCart () {

}

function removeFromCart () {
    
}

if (location.href.includes('cart.html')) {
    renderShoppingCart();
}


