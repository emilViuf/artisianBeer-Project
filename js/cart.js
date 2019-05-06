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


//we create a function that displays the items on users' shopping list, with buttons to increase/decrease amount of items, or 
//remove all (from the same type)

function renderLineItem(item) {
    return "<tr>" +
        "<img src=\"" + item.img + "\" height=\"200\" width=\"150\" >" +
        "<td>" + item.name + "</td>" +
        "<td>" + item.price + "</td>" +
        "<td>" + item.quantity + "</td>" +
        '<button id="addproduct" onclick="addProduct(this) " data-id="' + item.id + '"> Add </button>' +
        '<button id="removeproduct" onclick="removeProduct(this)" data-id="' + item.id + '"> Remove </button>' +
        '<button id="removeall" onclick="removeAll(this)" data-id="' + item.id + '"> Remove all </button>' +
        "<a href=\"productDetails.html?id=" + item.id + "\"> View details </a>" +
        "</tr>";
}

//Here we delcare a function addProduct which call the function addToCart, going through all conditions previously explained
//
function addProduct(product) {
    addToCart(product);
    renderShoppingCart();
}

//We create this function, similar to the one above, except this one will give user the alert "Product Added!" only when 
//pressing add to cart button either in the product catalogue page, or on the detailed product information page. 
//We wanted to have an alert so that the user can have a sort of feedback when his product has been added to the cart 

function addProductWithAlert(product) {
    addToCart(product);
    alert("Product Added!");
}

//Here we created a function to remove product one by one, calling function removeAll if the quantity of that particular product has reached 0
//We do so in order to avoid user 
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

//We have created a function that permits us to remove all beers of the same type 
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

//We have made a function to calculate the total amount of the products in our shopping cart, taking VAT into consideration
function totalAmount() {
    let total = 0;
    let VAT = 1.25;
    for (var i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity

    }
    return total * VAT;
}

//If the button with the id "continue-btn" has been clicked, function () {} will be called
document.getElementById("continue-btn").onclick = function () {
  console.log("button clicked")

//we assign the value inputted in the elements with their particular id to these specific variables ? 
    let cardholderName = document.getElementById("cardholderName").value
    let creditcardNumber = document.getElementById("creditCardNumber").value
    let expiryDate = document.getElementById("expiryDate").value
    let ccv = document.getElementById("ccv").value

    //we access to DOM elements by id, to verify the values (information) inputted 
    //The credit card number length must be at least 16 digit, if not the function will return false and give an alert 
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

//We declare a function that is supposed to verify whether the name introduced contains letters 
function validateName(name) {
    var nameCheck = '/^[A-Za-z]+([\ A-Za-z]+)*/';
    return nameCheck.test(String(name));
}

// After payment validation it stops... Whan  then ???
if (location.href.includes('cart.html')) {
    renderShoppingCart();
}
