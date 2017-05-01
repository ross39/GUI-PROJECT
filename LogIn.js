
var customer = {email:"G00348489@gmit.ie" , password: "12345",username:"Liam-Higgins"} 
localStorage.cust1 = JSON.stringify(customer);

function logInStorage()
{	
	if(document.getElementById("email").value == customer.email && document.getElementById("password").value == customer.password)
	{
		alert("Correct details");
		location.href = "index.html";
	}
	
	else{
		alert("Incorrect details");
		location.href = "LogIn.html";
	}

}

