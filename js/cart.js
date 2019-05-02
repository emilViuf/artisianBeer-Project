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
    document.getElementById("cart-content").innerHTML = cartInformation;
    document.getElementById("totalPrice").innerHTML = "Your total price is " + totalAmount() + " DKK."
}
// shoppingCart[i].name + " costs " + shoppingCart[i].price + " DKK. <br>"
// make a string that is html code to display correctly (tr td structure so that every element will get their own place)


function renderLineItem(item) {
    return "<tr>" +
        "<img src=\"" + item.img + "\" height=\"100\" width=\"50\" >" +
        "<td>" + item.name + "</td>" +
        "<td>" + item.price + "</td>" +
        "<td>" + item.quantity + "</td>" +
        '<button id="addproduct" onclick="addProduct(this) " data-id="' + item.id + '"> Add </button>' +
        '<button id="removeproduct" onclick="removeProduct(this)" data-id="' + item.id + '"> Remove </button>' +
        '<button id="removeall" onclick="removeAll(this)" data-id="' + item.id + '"> Remove all </button>' +
        "<a href=\"productDetails.html?id=" + item.id + "\"> View details </a>" +
        "</tr>";

}


function addProduct(product) {
    addToCart(product);
    renderShoppingCart();
}

function removeProduct(product) {
    let itemID = product.dataset.id
    console.log(itemID)

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === itemID) {
            shoppingCart[i].quantity--;
            if (shoppingCart[i].quantity === 0) {
                removeAll(product); 
            }
        }
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    renderShoppingCart();
}

function removeAll(product) {
    let itemID = product.dataset.id
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === itemID) {
            shoppingCart.splice(i, 1)
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            renderShoppingCart();
        }
    }
}

function totalAmount() {
    let total = 0;
    let VAT = 1.25;
    for (var i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity

    }
    return total * VAT;
}

document.getElementById("continue-btn").onclick = function () {
    console.log("button clicked")

    let cardholderName = document.getElementById("cardholderName").value
    let creditcardNumber = document.getElementById("creditCardNumber").value
    let expiryDate = document.getElementById("expiryDate").value
    let ccv = document.getElementById("ccv").value
    if (creditcardNumber.length !== 16) {
        alert("Please enter your 16 digit credit card number")
        return false
    }

    if (ccv.length !== 3) {
        alert("Please enter the 3 digit security code")
        return false
    }

    if (!validateName(cardholderName)) {
        alert("You need to enter your First and Last name!")
        return false
    }

    alert("Purchase has been completed. Congratulations")
    document.getElementById("cardholderName").value = "";
    document.getElementById("creditCardNumber").value = "";
    document.getElementById("ccv").value = "";
    shoppingCart = [];
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    renderShoppingCart();
}

function validateName(name) {
    var nameCheck = /^[A-Za-z]+$/ //+ " " + /^[A-Za-z]+$/; check for RegEx for something that includes a blank space 
    return nameCheck.test(String(name));
}

if (location.href.includes('cart.html')) {
    renderShoppingCart();
}
