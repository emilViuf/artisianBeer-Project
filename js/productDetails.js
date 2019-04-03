// this is made with the help of code made in class 

const productID = window.location.search.substring(4);
//this is supposed to know the productID, removing the query from URL 

const product = products.find(product => product.productID === parseInt(productID, 10));
//this is finding the product 

document.getElementById('details').innerHTML = product.productDetails();
