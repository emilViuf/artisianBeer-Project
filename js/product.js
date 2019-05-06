//We define a class, Product, with several parameters 

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

// This function returns the way the products are displayed in product.html
  productInformation() {
    return "<div style=\"margin-bottom: 75px\" class=\"product\">" +
      "<img src=\"" + this.img + "\" height=\"300\" width=\"250\" >" +
      "<h3>" + this.name + "</h3>" +
      "<p>" + this.type + "</p>" +
      "<p>" + this.price + " DKK</p>" +
      "<p><a href=\"productDetails.html?id=" + this.productID + "\">View details</a></p>" +
      '<button id="buybutton" onclick="(this)" data-ID="' + this.productID + '"> Add to cart </button>' +
      "</div>";
  }

  // We declare a function productDetails(), that allows us to learn more information about the product 
  // once on productDetails page 
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