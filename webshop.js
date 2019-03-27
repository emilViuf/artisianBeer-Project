// Import all product


// Select the div for products
//document.getElementById('showProducts').innerHTML = p1.productInformation()
const DOMElement = document.getElementById('showProducts')
// Create the HTML for each product
var html = ''

for (let i = 0; i < products.length; i++) {
    html += products[i].productInformation()
}

DOMElement.innerHTML = html

// Add the HTML to the div