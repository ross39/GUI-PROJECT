if(parseInt(sessionStorage.cost)  > 0)
{
 	document.getElementById("total").innerHTML = "<strong>Current amount in cart: €" + sessionStorage.cost + "</strong>";
}
else
{
	document.getElementById("total").innerHTML = "<strong>Current amount in cart: €0" + "</strong>";
}

