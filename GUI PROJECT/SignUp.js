function yourAccountStorage()
{
	if(document.getElementById("name").value == "")
	{
		alert("Please fill in name");
	}
	if(document.getElementById("email").value == "")
	{
		alert("Fill in email");
	}
	if(document.getElementById("password").value == "" && document.getElementById("confirm").value == "")
	{
		alert("Please fill in password and confirm password");
	}
	if(document.getElementById("password").value != document.getElementById("confirm").value)
	{
		alert("Passwords do not match");
	}
	if(document.getElementById("telephone").value == "")
	{
		alert("Please fill in Telephone");
	}
	//if(document.getElementById("email").value == customer[0].email)
	//{
	//	alert("This email is already in use");
	//}
	
	if(document.getElementById("name").value && document.getElementById("email").value && document.getElementById("password").value == document.getElementById("confirm").value
		&& document.getElementById("telephone").value)
	{
	var newCustomer={Name:document.getElementById("name").value, Email:document.getElementById("email").value, Password:document.getElementById("password").value, Telephone:document.getElementById("telephone").value};
	localStorage.nCust	= JSON.stringify(newCustomer);
	location.href = "index.html";
	}
	else
	{
	location.href = "yourAccount.html";
	}
}