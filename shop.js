var customername = "Monchai";
var products = ["Pizza","Naan","Sourdough","Foccacia","iPhone X"];
var price = [40, 10, 20, 80, 1000];
var totalPrice =0;
for (i = 0; i <5; i++) {
totalPrice = totalPrice+price[i];
}
totalPrice = totalPrice * 0.75;


document.getElementById("customer-name"). innerHTML=customername;
document.getElementById("price").innerHTML = "$" + totalPrice;


var productsText ="";
var productsElement = document.getElementById("product-list");

var i;
for (i = 0; i <5; i++) {
	
productsText = productsText + '<li class="list-group-item">' + products[i] +
	'<span class="badge badge-pill badge-secondary float-right">$' + price[i] + '</li>';
productsElement.innerHTML = productsText;

}

var greeting = "";
var time = new Date().getHours();


if (time < 12) {
	greeting = "Good day";
} else if (time < 18){
	greeting = "Good afternoon";
} else {
	greeting = "Good evening";
}

document.getElementById("greet"). innerHTML=greeting;

