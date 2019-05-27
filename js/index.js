function webtime()
{
	var date = new Date();
	document.getElementById("timediv").innerHTML=date.toLocaleString();
	setTimeout("webtime()",1000);
}