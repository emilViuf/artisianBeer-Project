class Product {
    
    constructor (name, productID,  type, colour, description, price, size,img) {
        this.name = name;
        this.productID = productID; 
        this.type = type;
        this.colour = colour; 
        this.description = description; 
        this.price = price;
        this.size = size;
        this.img = img;
    }
 productInformation() { 
      return '<tr>'+'<td colspan="2"><img src="'+ this.img +'" alt="Picture" height="242" width="142"></td></tr>' + 
              '<td>' + this.name + '</td>' + 
              '<td>' + this.productID + '</td>' + 
              '<td>' + this.type + '</td>' + 
              '<td>' + this.colour + '</td></tr><tr>' + 
              '<td>' + this.description + '</td></tr><tr>  ' + 
              '<td>' + this.price + '</td>' +  
              '<td>' + this.size + '</td></tr>'; 
 }
}
console.log(Product.productInformation);
 

