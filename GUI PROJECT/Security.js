 
 function securityAns()
 {
	 var answer = {sAns:"Freddie"} 
	 localStorage.secAns = JSON.stringify(answer);
	 
	if(document.getElementById("ans").value == answer.sAns)
	{
		alert("Correct Answer");
		location.href = "index.html";
	}	
	else 
	{
		alert("Incorrect Answer");
		location.href = "Security.html";
	}
	
 }