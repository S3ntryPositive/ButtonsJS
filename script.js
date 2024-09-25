window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("inpResult").disabled = true;
	document.getElementById("BtnAdd").addEventListener("click",Addition);
	document.getElementById("BtnSub").addEventListener("click",Addition);
	document.getElementById("BtnMul").addEventListener("click",Addition);
	document.getElementById("BtnDiv").addEventListener("click",Addition);
	document.getElementById("BtnClr").addEventListener("click",Addition);
	
}
