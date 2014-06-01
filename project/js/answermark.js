var answer = function(el){

if (el.className === "MyClass") 
	{el.className = "noclass"}
else {
	el.className = "MyClass";	
}
}	

var result = function (){
	var answer = [];
	var a  = document.getElementsByClassName("MyClass");
	for (var i = 0; i < a.length; i++) {
		answer.push(a[i].innerText);
	}
	localStorage.answerarray = answer;
	
}

