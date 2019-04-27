function setDate(){
  document.getElementById('date').innerHTML=Date();
}

var x = false;
var c = 0;
var arr = ["hello", "welcome", "to", "my","world"];
function changeHTML(){
	if (x === false){
		e = document.getElementById('click');
		e.innerHTML="Thanks for clicking!";
		e.style.color = "pink";
		x = true;
	}else{
		c = c % arr.length;
		document.getElementById('click').innerHTML= arr[c] + " at index " + c.toString();
		c++;
	}

}

function check(){
	a = document.getElementById("first_email");
	b = document.getElementById("verify_email");
	c = document.getElementById("alarm");
	if (a.value != b.value){
		c.innerHTML = "  Email address should be matched";
	}else{
		c.innerHTML = "";
	}
}

function optionalCareer(){

	
}