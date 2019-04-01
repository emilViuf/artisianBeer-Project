class Product {
    
    constructor (productID, name, type, colour, description, price, size,img) {
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
              "<img>" + this.img +  
			"<h3>" +
				this.name +
			"</h3>" +
            "<p>" + this.description + "</p>"+ 
            "<p>" + this.price + "</p>" + 
 			"<button data-product-id=" + this.id + "data-id=" + this.id + "onclick=\"onBuyMeClicked(this)\"> Buy me! </button>" +
			"<a href=\"product.html?id=" + this.id +"\"> View details </a>" +
		"</div>";
} 
}

console.log(productInformation); 
