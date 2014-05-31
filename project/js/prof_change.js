window.onload = function prof_change() {
	var first_name = localStorage.getItem('first_name');
	var last_name = localStorage.getItem('last_name');
	var passwd = localStorage.getItem('password');
	var re_passwd = localStorage.getItem('re_passwd');
	var email = localStorage.getItem('email');
	var birthday = localStorage.getItem('birthday');
	var org_troop1 = localStorage.getItem('org_troop1');
	var org_region1 = localStorage.getItem('org_region1');
	var org_level1 = localStorage.getItem('org_level1');

	document.getElementById("first_name2").innerHTML = first_name;
	document.getElementById("last_name2").innerHTML = last_name;
	document.getElementById("birthday").innerHTML = birthday;
	document.getElementById("org_troop1").innerHTML = org_troop1;
	document.getElementById("org_region1").innerHTML = org_region1;
	document.getElementById("org_level1").innerHTML = org_level1;

};
