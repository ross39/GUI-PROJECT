var quantity = 0;
var price = 0;
var amount = 0;
var previous = parseInt(localStorage.cost);
var itemArr = new Array(17);
if(previous  > 0) //get previous values if > 0
{
 	document.getElementById("cost").innerHTML = "<strong>Current amount in cart: €" + previous + "</strong>";
}
else
{
	document.getElementById("cost").innerHTML = "<strong>Current amount in cart: €0" + "</strong>";
}
function item(price,quan,totalQuan)
{
  this.price = price;
  this.quan = quan;
  this.totalQuan = totalQuan;
}


itemArr[0] =  new item(450,0,0); //item object Array
itemArr[1] = new item(600,0,0);
itemArr[2] = new item(500,0,0);
itemArr[3] = new item(800,0,0);
itemArr[4] = new item(250,0,0);
itemArr[5] = new item(90,0,0);
itemArr[6] = new item(80,0,0);
itemArr[7] = new item(200,0,0);
itemArr[8] = new item(180,0,0);
itemArr[9] = new item(300,0,0);
itemArr[10] = new item(350,0,0);
itemArr[11] = new item(300,0,0);
itemArr[12] = new item(150,0,0);
itemArr[13] = new item(140,0,0);
itemArr[14] = new item(200,0,0);
itemArr[15] = new item(80,0,0);
itemArr[16] = new item(120,0,0);

function add()
{
	for(var i = 0; i < 17; i++)
	{
    if(localStorage.itemArr == null)
    {
      localStorage.isActive = 0;
    }
      if(document.getElementById(i) != 0)
      {
         var prev = parseInt(itemArr[i].totalQuan);
         itemArr[i].quan = document.getElementById(i).value;
         var update = itemArr[i].quan;
         itemArr[i].totalQuan = prev + update;
         amount += itemArr[i].price * itemArr[i].quan;
         document.getElementById(i).value = "";
      }
			if(previous > 0)
			{
				localStorage.cost = previous + amount;
				document.getElementById("cost").innerHTML = "<strong>Current amount in cart: €" + localStorage.cost + "</strong>";
			}
			else
      {
				 localStorage.cost = amount;
				 document.getElementById("cost").innerHTML = "<strong>Current amount in cart: €" + localStorage.cost + "</strong>";
			}
    }

      localStorage["itemArr"] = JSON.stringify(itemArr);  //Convert object array and store as string

}
