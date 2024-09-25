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

function Addition()
{
    var Number1 = document.getElementById("Number1Input");
    var Number2 = document.getElementById("Number2Input");
    num1 = Number1.value;
    num2 = Number2.value;
    sum = parseInt(num1) + parseInt(num2);
    var result = document.getElementById("inpResult").textContent;
}

function Subtraction()
{
    var Number1 = document.getElementById("Number1Input");
    var Number2 = document.getElementById("Number2Input");
    num1 = Number1.value;
    num2 = Number2.value;
    sum = parseInt(num1) - parseInt(num2);
    var result = document.getElementById("inpResult").textContent;
}

function Multiplication()
{
    var Number1 = document.getElementById("Number1Input");
    var Number2 = document.getElementById("Number2Input");
    num1 = Number1.value;
    num2 = Number2.value;
    sum = parseInt(num1) * parseInt(num2);
    var result = document.getElementById("inpResult").textContent;
}

function Division()
{
    var Number1 = document.getElementById("Number1Input");
    var Number2 = document.getElementById("Number2Input");
    num1 = Number1.value;
    num2 = Number2.value;
    sum = parseInt(num1) / parseInt(num2);
    var result = document.getElementById("inpResult").textContent;
}

function ClearInp()
{
    document.getElementById("Number1Input").value = '';
    document.getElementById("Number2Input").value = '';
    document.getElementById("Number1Input").focus();
}
