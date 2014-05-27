'use strict' 

function redirect () {
	window.location = "index.html"
}

function check_input () {
	var user = document.getElementById('username');
	var	passwd = document.getElementById('passwd');
	var	re_passwd = document.getElementById('re_passwd');
	var	email = document.getElementById('email');
	var	birthday = document.getElementById('birthday1');

	if (user.value.length === 0 || passwd.value.length === 0 || re_passwd.value.length === 0 || email.value.length ===0 || birthday1.value.length===0) {
	
	 if(user.value.length === 0){
	user.style.borderColor = "red";
	} else {
		user.style.borderColor = ""
	}

	if(passwd.value.length === 0){
	passwd.style.borderColor = "red";
	} else {
		passwd.style.borderColor = ""
	}

	if(re_passwd.value.length === 0){
	re_passwd.style.borderColor = "red";
	} else {
		re_passwd.style.borderColor = ""
	}

	if(email.value.length === 0){
	email.style.borderColor = "red";
	} else {
		email.style.borderColor = ""
	}

	if(birthday.value.length === 0){
	birthday.style.borderColor = "red";
	} else {
		birthday.style.borderColor = ""
	} 
}
	else 
	window.location = "profile.html"
}

	
	



	

