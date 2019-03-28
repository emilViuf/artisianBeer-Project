
var htmlTableVariable = '<table border>';
//htmlTableVariable +='<tr>';
htmlTableVariable +='<tr>';   
    var count = 0;
        for (let i = 0; i < products.length/2; i++) {
      
            htmlTableVariable +='<td>';
            htmlTableVariable += products[i].productInformation();
            htmlTableVariable +='</td>';
            
        }
        htmlTableVariable +='</tr>';
        htmlTableVariable +='<tr>';   
        var count = 0;
            for (let i = products.length/2; i < products.length; i++) {
              
                htmlTableVariable +='<td>';
                htmlTableVariable += products[i].productInformation();
                htmlTableVariable +='</td>';
               
            }
            htmlTableVariable +='</tr>';
htmlTableVariable+= '</table>';
document.getElementById('showProducts').innerHTML = htmlTableVariable;

