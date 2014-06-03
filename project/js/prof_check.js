'use strict'

function redirect() {
	window.location = "index.html"
}

function check_input() {
	var first_name = document.getElementById('first_name');
	var last_name = document.getElementById('last_name');
	var org_troop1 = document.getElementById('org_troop1');
	var org_region1 = document.getElementById('org_region1');
	var org_level1 = document.getElementById('org_level1');
	var user = document.getElementById('username');
	var passwd = document.getElementById('passwd');
	var re_passwd = document.getElementById('re_passwd');
	var email = document.getElementById('email');
	var birthday = document.getElementById('birthday1');

	if (user.value.length === 0 || passwd.value.length === 0
			|| re_passwd.value.length === 0 || email.value.length === 0
			|| birthday1.value.length === 0) {

		if (user.value.length === 0) {
			user.style.borderColor = "red";
		} else {
			user.style.borderColor = ""
		}
		if (passwd.value.length === 0) {
			passwd.style.borderColor = "red";
		} else {
			passwd.style.borderColor = ""
		}

		if (re_passwd.value.length === 0) {
			re_passwd.style.borderColor = "red";
		} else {
			re_passwd.style.borderColor = ""
		}
		if (email.value.length === 0) {
			email.style.borderColor = "red";
		} else {
			email.style.borderColor = ""
		}

		if (birthday.value.length === 0) {
			birthday.style.borderColor = "red";
		} else {
			birthday.style.borderColor = ""
		}
	} else if (passwd.value != re_passwd.value) {
		passwd.style.borderColor = "red";
		re_passwd.style.borderColor = "red";

	} else
		window.location = "profile.html"
		localStorage.setItem('username', user.value);
	localStorage.setItem('password', passwd.value);
	localStorage.setItem('re_passwd', re_passwd.value);
	localStorage.setItem('email', email.value);
	localStorage.setItem('birthday', birthday.value);
	localStorage.setItem('first_name', first_name.value);
	localStorage.setItem('last_name', last_name.value);
	localStorage.setItem('org_troop1', org_troop1.value);
	localStorage.setItem('org_region1', org_region1.value);
	localStorage.setItem('org_level1', org_level1.value);
	
}

	
	



	

