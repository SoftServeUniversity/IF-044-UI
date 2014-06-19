'use strict'

function prof_change() {
	console.log(Model.date);
	var current_user = getCurrentUser(); 

    function getCurrentUser() {
    	for (var i = 0; i< Model.date.Users.length; i++){
    		if(Model.date.Users[i].id === Model.date.session_user_id){
    			return Model.date.Users[i];
    		}
    	}
    }

	//console.log(current_user);
	
	var first_name = current_user.firstName;
	var last_name = current_user.lastName;
	var passwd = current_user.password;
	var re_passwd = current_user.re_passwd;
	var email = current_user.email;
	var birthday = current_user.birthday;
	var org_troop1 = current_user.org_troop;
	var org_region1 = current_user.org_region;
	var org_level1 = current_user.org_level;

	//document.getElementById("first_name2").innerHTML = first_name;
	//document.getElementById("last_name2").innerHTML = last_name;
	document.getElementById('username2').innerHTML = first_name + " " + last_name;
	document.getElementById("birthday").innerHTML = birthday;
	document.getElementById("org_troop1").innerHTML = org_troop1;
	document.getElementById("org_region1").innerHTML = org_region1;
	document.getElementById("org_level1").innerHTML = org_level1;

};
  function rEdit () {
    window.location = "edit_profile.html"
    }

   function rIndex () {
    window.location = "index.html"
    }