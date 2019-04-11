// this is made with the help of code made in class 

const productID = location.search.substring(4);
//this is supposed to extract the productID by removing the query from URL 

const product = products.find(product => product.productID === parseInt(productID, 10));
//this is finding the product with the particular ID 

document.getElementById('details').innerHTML = product.productDetails();
//gets the div with details id 
