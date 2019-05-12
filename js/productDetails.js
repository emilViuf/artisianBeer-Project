
// We identify for which product the details should be shown, through the URL
const productID = location.search.substring(4);
// We extract the productID by calling the substring method on the query string 


const product = findProduct(parseInt(productID, 10));
// We search for the product with the particular ID and assign this to a constant called product 
// productID is a string, we convert it to a number in base 10


// We create the html code for the product details to be shown to the user
document.getElementById('details').innerHTML = product.productDetails();
// We the get the div with the id 'details', assigning the productDetails to its innertHTML

