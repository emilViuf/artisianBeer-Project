class Product {
    constructor (name, id,  type, colour, description, price, size) {
    this.name = name;
    this.id = id; 
    this.type = type;
    this.colour = colour; 
    this.description = description; 
    this.price = price;
    this.size = size;
    }

productInformation () { 
    return '<tr><td>' + this.name + '</td>' + 
           '<td>' + this.id + '</td>' + 
           '<td>' + this.type + '</td>' + 
           '<td>' + this.colour + '</td>' + 
           '<td>' + this.description + '</td>' + 
           '<td>' + this.price + '</td>' +  
           '<td>' + this.size + '</td></tr>'; 
    }
}

console.log(Product.productInformation);
 

