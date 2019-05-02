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

  productInformation() {
    return "<div style=\"margin-bottom: 75px\" class=\"product\">" +
      "<img src=\"" + this.img + "\" height=\"200\" width=\"100\" >" +
      "<h3>" + this.name + "</h3>" +
      "<p>" + this.type + "</p>" +
      "<p>" + this.price + " DKK</p>" +
      "<p><a href=\"productDetails.html?id=" + this.productID + "\">View details</a></p>" +
      '<button id="buybutton" onclick="addToCart(this)" data-ID="' + this.productID + '"> Add to cart </button>' +
      "</div>";
  }

  productDetails() {
    return "<div class=\"productDetails\">" +
      "<img  class = \"imageClass\" src=\"" + this.img + "\" height=\"400\" width=\"300\" >" +
      "<h3>" + this.name + "</h3>" +
      "<p> Beer type: " + this.type + "</p>" +
      "<p> Beer colour: " + this.colour + "</p>" +
      "<p> Description: " + this.description + "</p>" +
      "<p> Size: " + this.size + "</p>" +
      "<p> Price: " + this.price + " DKK</p>" +
      "<button data-product-id=" + this.productID + "data-id=" + this.productID + "onclick=\"onBuyMeClicked(this)\"> Add to cart </button>" +
      "</div>";
  }

}