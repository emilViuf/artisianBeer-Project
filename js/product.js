
// We create a Product class with properties (productID, name, ...)
// The way we give value to Product properties is through the parameters of the constructor
// The values of the parameters get assigned to the properties of the product

class Product {
  constructor(productID, name, type, colour, description, price, size, img) {
    this.productID = productID;
    this.name = name;
    this.type = type;
    this.colour = colour;
    this.description = description;
    this.price = price;
    this.size = size;
    this.img = img;
  }

  // This function creates the html for the product page for the specific product 
  productInformation() {
    return "<div style=\"margin-bottom: 75px\" class=\"product\">" +
      "<img src=\"" + this.img + "\" height=\"300\" width=\"250\" >" +
      "<h3>" + this.name + "</h3>" +
      "<p>" + this.type + "</p>" +
      "<p>" + this.price + " DKK</p>" +
      "<p><a href=\"productDetails.html?id=" + this.productID + "\">View details</a></p>" +
      '<button id="buybutton" onclick="addProductWithAlert(this)" data-ID="' + this.productID + '"> Add to cart </button>' +
      "</div>";
  }

  // We declare a function productDetails(), that allows us to create the html for the productDetails page for this specific product
  productDetails() {
    return "<div class=\"productDetails\">" +
      "<img  class = \"imageClass\" src=\"" + this.img + "\" height=\"400\" width=\"300\" >" +
      "<h3>" + this.name + "</h3>" +
      "<p> Beer type: " + this.type + "</p>" +
      "<p> Beer colour: " + this.colour + "</p>" +
      "<p> Description: " + this.description + "</p>" +
      "<p> Size: " + this.size + "</p>" +
      "<p> Price: " + this.price + " DKK</p>" +
      '<button id="buybutton" onclick="addProductWithAlert(this)" data-ID="' + this.productID + '"> Add to cart </button>' +
      "</div>";
  }
}