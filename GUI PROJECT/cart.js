var discount = "10OFF";
var done = false;
if(parseInt(localStorage.cost) > 0)
{
 	document.getElementById("total").innerHTML = "<strong>Current amount in cart: €" + localStorage.cost + "</strong>";
}
else
{
	document.getElementById("total").innerHTML = "<strong>Current amount in cart: €0" + "</strong>";
}
if(localStorage["itemArr"] != null)
{
  var cartArr = JSON.parse(localStorage["itemArr"]);
  for(var i = 0; i < 17; i++)
  {
      var cost = parseInt(cartArr[i].price);
      var quantity = parseInt(cartArr[i].totalQuan);
      if(quantity > 0)
      {
        document.getElementById("list").innerHTML += "<li>"+ "Item Number: " + (i + 1) +" Price of item: " + cost + " Quantity: " + quantity + " Total cost of item(s): " + cost * quantity + "</li>";
      }
  }
}
function dis()
{
  var disc = document.getElementById("disc").value;
  if(disc == discount && done == false && localStorage.isActive == 0)
  {
    localStorage.cost = parseInt(localStorage.cost - localStorage.cost * 0.1);
    alert("You have been granted a discount of 10% off")
    location.reload();
    localStorage.isActive = 1;
  }
  else {
    alert("You have either already claimed the offer or you do not have the right code");
  }
}
function buy()
{
  alert("Thank you for your purchase\nYou will now be redircted to the homepage");
  window.location.replace("index.html"); //redirect to homepage
  localStorage.removeItem("itemArr");
  localStorage.removeItem("cost");
}
function reset()
{
  localStorage.removeItem("itemArr");
  localStorage.removeItem("cost");
  location.reload();
}
