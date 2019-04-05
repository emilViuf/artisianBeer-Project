function search() {
    var input=document.getElementById("search");
    var filter=input.value.toLowerCase();
    var divs=document.getElementsByClassName("product"); 

    for(i=0; i<divs.length; i++) {
if (divs[i].innerText.toLowerCase().includes(filter)) {
    divs[i].style.display="block"; 
}
else {
    divs[i].style.display="none"; 
}
}
} 