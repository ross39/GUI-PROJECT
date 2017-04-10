var quantity = 0;
var price = 0;
var amount = 0;
function add()
{
	for(var i = 0; i < 17; i++)
	{
		if(document.getElementById(i).value > 0)
		{
			quantity += parseInt(document.getElementById(i).value);
			if(i == 0 && document.getElementById(i).value != null )
			{
			   price += 450 * quantity;
			   sessionStorage.amount = price;
			   document.getElementById(i).value = 0;
			   quantity = 0;
			}
			else if(i == 1 && document.getElementById(i).value != null )
			{
				price += 600 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 2 && document.getElementById(i).value != null )
			{
				price += 500 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 3 && document.getElementById(i).value != null )
			{
				price += 800 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 4 && document.getElementById(i).value != null )
			{
				price += 250 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			if(i == 5 && document.getElementById(i).value != null )
			{
				price += 90 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			
			else if(i == 6 && document.getElementById(i).value != null )
			{
				price += 80 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 7 && document.getElementById(i).value != null )
			{
				price += 200 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 8 && document.getElementById(i).value != null )
			{
				price += 180 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 9 && document.getElementById(i).value != null )
			{
				price += 230 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 10 && document.getElementById(i).value != null )
			{
				price += 300 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 11 && document.getElementById(i).value != null )
			{
				price += 350 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 12 && document.getElementById(i).value != null )
			{
				price += 300 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 13 && document.getElementById(i).value != null )
			{
				price += 150 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 14 && document.getElementById(i).value != null )
			{
				price += 140 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 15 && document.getElementById(i).value != null )
			{
				price += 200 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 16 && document.getElementById(i).value != null )
			{
				price += 80 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}	
			else if(i == 17 && document.getElementById(i).value != null )
			{
				price += 120 * quantity;
				sessionStorage.amount = price;
				quantity = 0;
				document.getElementById(i).value = 0;
			}
			document.getElementById("cost").innerHTML = "<strong>Current amount in cart: €" + parseInt(sessionStorage.amount + "</strong>");
		}
	}
}

 