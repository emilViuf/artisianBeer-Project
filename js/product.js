class Product {
    
    constructor (productID, name, type, colour, description, price, size, img) {
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
   return  "<div class=\"product\">" +
                "<img src=\"" + this.img +"\" height=\"200\" width=\"100\" >" +
			    "<h3>" + this.name + "</h3>" +
                "<p>" + this.type + "</p>" + 
                "<p>" + this.price + "</p>" + 
 			    "<button data-product-id=" + this.productID + "data-id=" + this.productID + "onclick=\"onBuyMeClicked(this)\"> Buy me! </button>" +
			    "<a href=\"productDetails.html?id=" + this.productID +"\">View details</a>" +
		    "</div>";
} 

productDetails() { 
    return  "<div class=\"productDetails\">" +
                 "<img  class = \"imageClass\" src=\"" + this.img +"\" height=\"400\" width=\"300\" >" +
                 "<h3>" + this.name + "</h3>" +
                 "<p> Beer type: " + this.type + "</p>" + 
                 "<p> Beer colour: " + this.colour + "</p>" + 
                 "<p> Description: "  + this.description + "</p>"+
                 "<p> Size: " + this.size + "</p>" + 
                 "<p> Price: " + this.price + "</p>" + 
                  "<button data-product-id=" + this.productID + "data-id=" + this.productID + "onclick=\"onBuyMeClicked(this)\"> Buy me! </button>" +
             "</div>";
 } 
}



