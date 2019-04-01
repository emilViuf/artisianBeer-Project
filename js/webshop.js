
const DOMElement = document.getElementById('showProducts')
var html= '';

        for (let i = 0; i < products.length; i++) {
    html += products[i].productInformation()
}
DOMElement.innerHTML = html 

