class calculator {	
	constructor(){
	}
	add()
	{
		let first_no= parseInt(document.getElementById("txtNumber1").value);
		let secon_no= parseInt(document.getElementById("txtNumber2").value);
		let result=first_no+secon_no;
		
		 document.getElementById("txtResult").value = result;

	}
	 substract()
	{		let first_no= parseInt(document.getElementById("txtNumber1").value);
		let secon_no=parseInt(document.getElementById("txtNumber2").value);
		let result=first_no-secon_no;
  		 document.getElementById("txtResult").value = result;
		
	}
	 multiply()
	{
		let first_no= parseInt(document.getElementById("txtNumber1").value);
		let secon_no=parseInt(document.getElementById("txtNumber2").value);
		let result=first_no*secon_no;
		   document.getElementById("txtResult").value = result;
	}
	 division()
	{
		let first_no= parseInt(document.getElementById("txtNumber1").value);
		let secon_no=parseInt(document.getElementById("txtNumber2").value);
		let result=first_no/secon_no;
		 document.getElementById("txtResult").value = result;

	}
	//calc calculator=new calculator();

}
