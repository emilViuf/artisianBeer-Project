const productID = window.location.search.substring(4); 
const product = products.find(product => product.productID === parseInt(productID, 10));

document.getElementById('details').innerHTML = product.productInformation();