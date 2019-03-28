class Product {
    
    constructor (name, id,  type, colour, description, price, size,img) {
        this.name = name;
        this.id = id; 
        this.type = type;
        this.colour = colour; 
        this.description = description; 
        this.price = price;
        this.size = size;
        this.img = img;
        }

productInformation () { 
    return '<table border><tr>'+
    '<td colspan="2"><img src="'+this.img+'" alt="Smiley face" height="242" width="142"></td></tr><tr>' +
            '<td>' + this.name + '</td>' + 
           '<td>' + this.size + '</td></tr><tr>' + 
          
           '<td>' + this.type + '</td>' +  
           '<td>' + this.price + '</td></tr></table>'; 
    }



    productInformationDetail () { 
        return '<table ><tr><td>' + this.name + '</td>' + 
               '<td>' + this.id + '</td>' + 
               '<td>' + this.type + '</td>' + 
               '<td>' + this.colour + '</td></tr><tr>' + 
               '<td>' + this.description + '</td></tr><tr>  ' + 
               '<td>' + this.price + '</td>' +  
               '<td>' + this.size + '</td></tr></table>'; 
        }




}



console.log(Product.productInformation);
 

