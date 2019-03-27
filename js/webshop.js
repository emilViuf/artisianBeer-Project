
var htmlTableVariable = '<table border>'

for (let i = 0; i < products.length; i++) {
    htmlTableVariable += products[i].productInformation()
}
htmlTableVariable+= '</table>'
document.getElementById('showProducts').innerHTML = htmlTableVariable
