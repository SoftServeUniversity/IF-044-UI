window.onload = function prof_change() {
	console.log(Model.date);
	var last_register_user = Model.date.Users[Model.date.Users.length-1];
	console.log(last_register_user);
	
	var first_name = last_register_user.first_name;
	var last_name = last_register_user.last_name;
	var passwd = last_register_user.password;
	var re_passwd = last_register_user.re_passwd;
	var email = last_register_user.email;
	var birthday = last_register_user.birthday;
	var org_troop1 = last_register_user.org_troop;
	var org_region1 = last_register_user.org_region;
	var org_level1 = last_register_user.org_level;

	document.getElementById("first_name2").innerHTML = first_name;
	document.getElementById("last_name2").innerHTML = last_name;
	document.getElementById("birthday").innerHTML = birthday;
	document.getElementById("org_troop1").innerHTML = org_troop1;
	document.getElementById("org_region1").innerHTML = org_region1;
	document.getElementById("org_level1").innerHTML = org_level1;

};
