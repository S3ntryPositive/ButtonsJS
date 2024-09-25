window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("inpResult").disabled = true;
	document.getElementById("BtnAdd").addEventListener("click",Addition);
	document.getElementById("BtnSub").addEventListener("click",Subtraction);
	document.getElementById("BtnMul").addEventListener("click",Multiplication);
	document.getElementById("BtnDiv").addEventListener("click",Division);
	document.getElementById("BtnClr").addEventListener("click",ClearInp);
	
}
