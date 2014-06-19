'use strict'

window.onload = function() {
		
//Captcha registration form
		
		var a = Math.ceil(Math.random() * 9);
		var b = Math.ceil(Math.random() * 9);
		var c = Math.ceil(Math.random() * 9);
		var d = Math.ceil(Math.random() * 9);
		var e = Math.ceil(Math.random() * 9);
		var code = a * b * c * d * e;
		document.getElementById("txtCaptcha").value = code;
		document.getElementById("txtCaptchaDiv").innerHTML = code;
		};

//redirect

function redirect() {
	window.location = "index.html"
}
//Check input

function check_input() {
	var reg = /[a-z0-9]@[a-z0-9]\.[a-z0-9]/g;
	var str1 = document.getElementById('txtCaptcha').value;
	var str2 = document.getElementById('txtInput').value;
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
	var mail = reg.test(email.value);

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

		} else if (mail === false){
		 
		email.style.borderColor = "red";
		} else if (str1 !== str2) { 
		alert  ('Число провірки не співпадає');
		} 
		
		else{

//else good save localstorage

			var new_user_id = Model.date.Users[Model.date.Users.length-1].id +1;
			Model.date.Users.push(  
             	 {id:new_user_id,
                  role_id:1,
                  location: "Ukraine",
                  username: user.value, 
                  firstName: first_name.value,
                  lastName: last_name.value,
                  email: email.value,
                  password: passwd.value,
                  re_passwd: re_passwd.value,
                  birthday: birthday.value,
                  org_troop: org_troop1.value,
                  org_region: org_region1.value,
                  org_level: org_level1.value,
                  org_group: "some group",
                  login_status: ""
                    
                  } );
	    Model.date.session_user_id = new_user_id;
		Model.save_localStorage();


		window.location = "index.html"
	}	
}