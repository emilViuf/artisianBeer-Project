// Identifying for which product the details should be shown

const productID = location.search.substring(4);
//this is supposed to extract the productID by removing the query from URL 


// Locating this product in our database and retrieving the product information
const product = products.find(product => product.productID === parseInt(productID, 10));
//this is finding the product with the particular ID 


// Create the HMTL code for the product details to be shown to the user
document.getElementById('details').innerHTML = product.productDetails();
//gets the div with details id
