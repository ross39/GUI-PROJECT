var quantity = 0;
var temp = 0;
function add()
{
	for(var i = 0; i < 17; i++)
	{
		if(document.getElementById("" + i) != null)
		{
			document.getElementById("" + i).value += temp;
			quantity += parseInt(temp);
		}
	}
}