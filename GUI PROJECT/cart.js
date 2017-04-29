if(parseInt(localStorage.cost) > 0)
{
 	document.getElementById("total").innerHTML = "<strong>Current amount in cart: €" + localStorage.cost + "</strong>";
}
else
{
	document.getElementById("total").innerHTML = "<strong>Current amount in cart: €0" + "</strong>";
}
var cartArr = JSON.parse(localStorage.itemArr);
for(var i = 0; i < 17; i++)
{
    var cost = parseInt(cartArr[i].price);
    var quantity = parseInt(cartArr[i].totalQuan);
    if(quantity > 0)
    {
      document.getElementById("list").innerHTML += "<ul>"+ "Item Number: " + (i + 1) +" Price of item: " + cost + " Quantity: " + quantity + " Total cost of item(s): " + cost * quantity + "</ul>";
    }
}
function buy()
{
  alert("Thank you for your purchase\nYou will now be redircted to the homepage");
  window.location.replace("index.html"); //redirect to homepage
  localStorage.removeItem("itemArr");
  localStorage.removeItem("cost");
}
