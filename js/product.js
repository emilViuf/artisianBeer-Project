class Product {

<<<<<<< HEAD
        productInformation() { 
        return  "<div class=\"product\">" +
                        "<img src=\"" + this.img +"\" height=\"200\" width=\"100\" >" +
                        "<h3>" + this.name + "</h3>" +
                        "<p>" + this.type + "</p>" + 
                        "<p>" + this.price + " DKK</p>" + 
                        '<button id="buybutton" onclick="addToCart(this)" data-id="' + this.productID + '"> Buy me! </button>' +
                        "<a href=\"productDetails.html?id=" + this.productID +"\">View details</a>" +
                    "</div>";
        } 
=======
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
>>>>>>> f371b84a8cfe4344030bbd58cd1a6b76a061fabd

  productInformation() {
    return "<div class=\"product\">" +
      "<img src=\"" + this.img + "\" height=\"200\" width=\"100\" >" +
      "<h3>" + this.name + "</h3>" +
      "<p>" + this.type + "</p>" +
      "<p>" + this.price + " DKK</p>" +
      '<button id="buybutton" onclick="addToCart(this)" data-ID="' + this.productID + '"> Buy me! </button>' +
      "<a href=\"productDetails.html?id=" + this.productID + "\">View details</a>" +
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
      "<button data-product-id=" + this.productID + "data-id=" + this.productID + "onclick=\"onBuyMeClicked(this)\"> Buy me! </button>" +
      "</div>";
  }


  // renderHTML() {
  //   return `<tr> 
  //             <td> 
  //               <img src ="${this.img}" style="height: 125px">
  //             </td> 
  //           <td>${this.name}</td>
  //         <td>${this.type}</td>
  //       <td>${this.price}</td>
  //     <td>
  //       <input type="number" class="quantity" min="1" max="99" value="1">
  //     <button class="add-cart-btn" data-id="${this.productID}" data-name="John">Add to Cart</button>
  //<td>
  // </tr>
  // `};

}