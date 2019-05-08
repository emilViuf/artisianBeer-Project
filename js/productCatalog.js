
var html = "";
// We create an empty html variable 
// We create a for loop to search through products
// We add to the variable html the productInformation of each product
for (let i = 0; i < products.length; i++) {
    html += products[i].productInformation()
}
document.getElementById('showProducts').innerHTML = html
// We assign to the innerHTML of the div with id 'showProduct' the html variable 


// The search function uses the input from the search field, we get its value and change it to lower case
// We create a variable divs, that stores all the divs with the class name product 
function search() {
    var input = document.getElementById("search").value.toLowerCase;
    var divs = document.getElementsByClassName("product");

// We loop through all the divs, and the ones that match our input field we set them to display block 
    for (i = 0; i < divs.length; i++) {
        if (divs[i].innerText.toLowerCase().includes(input)) {
            divs[i].style.display = "block";
        }

// otherwise it sets our input field to display none 
        else {
            divs[i].style.display = "none";
        }
    }
} 