//We store the shoppingCart in the shoppingCart variable
var shoppingCart = getShoppingCart();

//Function to add products to cart
function addToCart(product) {
    const itemID = product.dataset.id;
    console.log(itemID)

    var cartItem = findProduct(itemID)
    let exists = false;
    let index;

    //we create a for loop for the shoppingCart to check if we already have the chosen product in the cart

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === itemID) {
            exists = true;
            //save the index of the product in the index variable 
            index = i;
        }
    }

    // if the condition holds true, then exists is true, the index of our lineItem gets assigned i
    // if exists is true, then we increase by 1 the quantity of our lineItem
    // else we make a new lineItem and we store in the cart 

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
    // we then save the new shoppingCart in our localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

// We make a function that gets the shopping cart from localStorage and checks if it exists  
// If it does not exist, then we make an empty shoppingCart 
// else we get the shoppingCart from localStorage and assign it to shoppingCart

function getShoppingCart() {
    if (localStorage.getItem('shoppingCart') === null) {
        shoppingCart = [];
    } else {
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    return shoppingCart
};


// We create a function that renders our shoppingCart 
function renderShoppingCart() {
    var cartInformation = "";
    for (i = 0; i < shoppingCart.length; i++) {
        cartInformation += renderLineItem(shoppingCart[i])
    }
    document.getElementById("cart-content").innerHTML = cartInformation;
    document.getElementById("totalPrice").innerHTML = "Your total price is " + totalAmount() + " DKK."
}


// We create a function that displays the items on users' shopping list
// With buttons to increase/decrease amount of items, or 
// Remove all (from the same type)

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

// Here we delcare a function which adds a product to the cart
// And renders the shoppingCart
// We created this function to be able to add to shoppingCart from the cart page and also refresh the page

function addProduct(product) {
    addToCart(product);
    renderShoppingCart();
}

//We create this function, similar to the one above, except this one will give user the alert "Product Added!" only when 
//pressing add to cart button either in the product catalogue page, or on the detailed product information page. 
//We wanted to have an alert so that the user can have some sort of feedback when his/hers product has been added to the cart 

function addProductWithAlert(product) {
    addToCart(product);
    alert("Product Added!");
}

//Function to remove product one by one, calling function removeAll if the quantity of that particular product has reached 0
//We do so in order to avoid negative quantities 

function removeProduct(product) {
    let itemID = product.dataset.id
    console.log(itemID)
    // If the shoppingCart has a product with the given id, we decrease the quantity by one
    // If quantity = 0, we call removeAll 
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === itemID) {
            shoppingCart[i].quantity--;
            if (shoppingCart[i].quantity === 0) {
                removeAll(product);
            }
        }
    }
    // We store the new shoppingCart in localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    renderShoppingCart();
}

//We have created a function that permits us to remove all the beers of the same type 
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

//We declare a function that is supposed to verify whether the name text field contains letters 
function validateName(name) {
    var nameCheck = /^[A-Za-z]+ [A-Za-z ]+$/;
    return nameCheck.test(String(name));
}

// We render the shoppingCart only when on the cart.html page
if (location.href.includes('cart.html')) {
    //If the button with the id "continue-btn" has been clicked, the function will be called
    document.getElementById("continue-btn").onclick = function () {
        console.log("button clicked")

        //we assign the value inputted in the elements with their particular id to these specific variables ? 
        let cardholderName = document.getElementById("cardholderName").value
        let creditcardNumber = document.getElementById("creditCardNumber").value
        let expiryDate = document.getElementById("expiryDate").value
        let ccv = document.getElementById("ccv").value

        // We access the DOM elements by id, to verify the values (the information) inputted 
        // If the information is invalid, the function will return false and give an alert 

        // if (!validateName(cardholderName)) {
        //     alert("You need to enter your First and Last name!")
        //     return false
        // }
        if (localStorage.getItem("loggedInUser") !== cardholderName) {
            alert("Please log in to complete your purchase")
            return false
        }

        if (creditcardNumber.length !== 16) {
            alert("Please enter your 16 digit credit card number")
            return false
        }
        if (expiryDate.length === 0) {
            alert("Please enter a valid card date")
            return false
        }

        // Here we check if the length of the ccv value is not 3 or if it not a number, it should return the alert 
        if (ccv.length !== 3 || isNaN(ccv)) {
            alert("Please enter the 3 digit security code")
            return false
        }

        alert("Purchase has been completed. Congratulations")

        // Once payment has been validated, we clear the html fields, empty the shoppingCart
        // And then we render the shoppingCart
        document.getElementById("cardholderName").value = "";
        document.getElementById("creditCardNumber").value = "";
        document.getElementById("ccv").value = "";
        shoppingCart = [];
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        renderShoppingCart();

    }
    renderShoppingCart();
}
