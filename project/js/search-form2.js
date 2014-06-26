var place_for_table = document.getElementById('usersTable');
var place_for_blacklist = document.getElementById('blacklist');
var place_for_administrationlist = document.getElementById('administrationlist');
console.log(Model.date.Users);



var g;// current user for change status
var l;// current user for delete user
var f;// current user for banned

function changestatus(){
	var new_status = document.getElementById('select_status');
	var change_status_user = new_status.options[new_status.selectedIndex].getAttribute("role_id");
	var current_user = g;
	console.log(current_user);
	var str1 = document.getElementById('txtCaptcha').value;
	var str2 = document.getElementById('txtInput').value;
	if (str1 == str2) { 
			current_user.role_id = change_status_user;
			document.getElementById('txtInput').value = "";
			console.log("id=>"+current_user.role_id);
			Model.save_localStorage();
			showAll();
	
	}
}


function resetCapcha(){
	if(document.getElementById('txtInput').value){document.getElementById('txtInput').value="";}
	if(document.getElementById('txtInput_delete').value){document.getElementById('txtInput_delete').value="";}
	if(document.getElementById('txtInput_banned').value){document.getElementById('txtInput_banned').value="";}
}


function chengestatus(e){
	var attribute = e.target.getAttribute('id_user');
	var current_user = get_user_by_id(attribute);
	var first_name = current_user.firstName;
	g = current_user;
	document.getElementById('name_of_user').innerHTML = "<strong>"+first_name+"</strong>";
	var carrent_user_status = current_user.role_id;
	var j = carrent_user_status-1;
	console.log(carrent_user_status);
	document.getElementById('select_status').options[j].selected = true;

	    var a = Math.ceil(Math.random() * 9);
        var b = Math.ceil(Math.random() * 9);
        var c = Math.ceil(Math.random() * 9);
        var d = Math.ceil(Math.random() * 9);
        var e = Math.ceil(Math.random() * 9);
        var code = a * b * c * d * e;

        document.getElementById("txtCaptcha").value = code;
        document.getElementById("txtCaptchaDiv").innerHTML = code;
	}


function button_delete_user(id){
	var attribute = id;
	var current_user = get_user_by_id(attribute);
	console.log(current_user);
	l = current_user;
	document.getElementById('name_of_user_delete').innerHTML = current_user.firstName;
	for( j = 0; j < Model.date.User_roles.length; j++){
		if(current_user.role_id == Model.date.User_roles[j].id){
			var current_user_status = Model.date.User_roles[j].role_name;
		}
	}
	document.getElementById('main_status_of_user').innerHTML = current_user_status;

	    var a = Math.ceil(Math.random() * 9);
        var b = Math.ceil(Math.random() * 9);
        var c = Math.ceil(Math.random() * 9);
        var d = Math.ceil(Math.random() * 9);
        var e = Math.ceil(Math.random() * 9);
        var code = a * b * c * d * e;

	document.getElementById("txtCaptcha_delete").value = code;
    document.getElementById("txtCaptchaDiv_delete").innerHTML = code;
}


function deleteuser(){
	var str1 = document.getElementById('txtCaptcha_delete').value;
	var str2 = document.getElementById('txtInput_delete').value;
	console.log(str1, str2);
	var current_user = l;
	console.log(current_user);
	for (var i = 0; i < Model.date.Users.length; i++) {
		if(str1 == str2){
			if (current_user == Model.date.Users[i]) {
				document.getElementById('txtInput_delete').value = "";
				Model.date.Users.splice(i, 1)
				}
		}
		else{
			document.getElementById('txtInput_delete').value = "";
		}
	}
		Model.save_localStorage();
		showAll();
	}


function button_banned_users(e){
	var attribute = e.target.getAttribute('id_user');
	var current_user = get_user_by_id(attribute);
	if (current_user.banned == 1) {
		document.getElementById('change_status_blacklist').innerHTML = "Винести";
		document.getElementById('myModalLabel_blacklist').innerHTML = "Винести з чорного списку";
	}
	else{
		document.getElementById('change_status_blacklist').innerHTML = "Внести";
		document.getElementById('myModalLabel_blacklist').innerHTML = "Внести до чорного списку";
	}
	f = current_user;
	document.getElementById('name_of_user_banned').innerHTML = current_user.firstName;
	console.log(current_user);

	var a = Math.ceil(Math.random() * 9);
        var b = Math.ceil(Math.random() * 9);
        var c = Math.ceil(Math.random() * 9);
        var d = Math.ceil(Math.random() * 9);
        var e = Math.ceil(Math.random() * 9);
        var code = a * b * c * d * e;

        document.getElementById("txtCaptcha_banned").value = code;
        document.getElementById("txtCaptchaDiv_banned").innerHTML = code;
}


function banned(){
	var str1 = document.getElementById('txtCaptcha_banned').value;
	var str2 = document.getElementById('txtInput_banned').value;
	var current_user = f;
	console.log(current_user)
	if (str1 == str2){ 
		if (current_user.banned == 0) {
			for (var i = 0; i < Model.date.Users.length; i++) {
				if(current_user == Model.date.Users[i]){
					Model.date.Users[i].banned = 1;
					document.getElementById('txtInput_banned').value = "";	
				}
			}
		} 
		else{
			for (var i = 0; i < Model.date.Users.length; i++) {
				if(current_user == Model.date.Users[i]){
					Model.date.Users[i].banned = 0;
					document.getElementById('txtInput_banned').value = "";	
				}
			}
		}
	}
	else{
		document.getElementById('txtInput_banned').value = "";	
	}	
	// for (var i = 0; i < Model.date.Users.length; i++) {
	// 	if (current_user = Model.date.Users[i]) {
	// 		if (current_user.banned == 0) {
	// 			Model.date.Users[i].banned = 1;	
	// 			document.getElementById('txtInput_delete').value = "";	
 // 			} 
 // 			else{
 // 				Model.date.Users[i].banned = 0;
 // 				document.getElementById('txtInput_delete').value = "";
 // 			}
	// 	} 
	// }
	Model.save_localStorage();
	showAll();
}
//////////////////////////////////////////////////////////////////////////////////// onclick=button_banned_user("+Model.date.Users[i].id+") 

function sort(){
	var n = [];
	var h = [];
	for (var i = 0; i < Users.length; i++) {
	n.push(Users[i].firstName)
	}
	n.sort();
	// console.log(b);
	for (var i = 0; i < n.length; i++) {
		for (var j = 0; j < Users.length; j++) {
			if (n[i] == Users[j].firstName) {
				h.push(Users[j])
			}
		}
	}
	console.log(e);
}



	




function showAll(){

Users = Model.date.Users;
var filter = document.getElementById('filter'); 
var current_filter = filter.selectedIndex;
var filter_fade_panel_admin = document.getElementById('filterforstatus'); 
var current_filter_status = filter_fade_panel_admin.selectedIndex;

	
		var n = [];
		var usersSort = [];
		var sort = [];
		var statusSort = [];

	if (current_filter == 0) {
		for (var i = 0; i < Users.length; i++) {
		n.push(Users[i].firstName)
		}
		n.sort();
		for (var i = 0; i < n.length; i++) {
			for (var j = 0; j < Users.length; j++) {
				if (n[i] == Users[j].firstName) {
					usersSort.push(Users[j])
					}
				}
			}
		}
	else{
		for (var i = 0; i < Users.length; i++) {
		n.push(Users[i].email)
		}
		n.sort();
		for (var i = 0; i < n.length; i++) {
			for (var j = 0; j < Users.length; j++) {
				if (n[i] == Users[j].email) {
					usersSort.push(Users[j])
					}
				}
			}
		}
		// if (current_filter_status == 1) {

		// 				for (var f = 0; f < Users.length; f++) {
		// 					for (var d = 0; d < Model.date.User_roles.length; d++) {
		// 					if(Users[f].role_id == Model.date.User_roles[d].id && Users[f].role_id > 1){
		// 						sort.push(Model.date.User_roles[d].role_name)
		// 					}
						
		// 				}
		// 			}
		// 				sort.sort();
		// 				console.log(sort);

		// 				for (var z = 0; z < sort.length; z++) {
		// 					for (var x = 0; x < Users.length; x++) {
		// 						if (sort[z] == Users[x].role_id) {
		// 						statusSort.push(Users[x])
							
		// 						}

		// 					}

		// 				}
		// 				console.log(statusSort);
		// 			}
				
	


	var status = [];
	var content_table = '';
	var content_blacklist = '';
	var content_administrationlist = '';
	Model.load_localStorage();
	for(var i = 0;i<usersSort.length;i++){        //перебір масиву юзерів
		for( j = 0; j < Model.date.User_roles.length; j++){ // перебір ролей цих юзерів в системі
		if(usersSort[i].role_id == Model.date.User_roles[j].id){ // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
			var role_name_user = Model.date.User_roles[j].role_name;
			//console.log(role_name_user);
		if (usersSort[i].role_id == 1){
			if (usersSort[i].banned == 0) {
			content_table+="<tr><td><span id='firstName'>"+usersSort[i].firstName+"</span></td><td><span id='mail'>"+usersSort[i].email+"</span></td><td><span class='user'><strong>"+role_name_user+"</strong></span></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' id_user='"+usersSort[i].id+"'>ЗМІНИТИ СТАТУС</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user'  id_user='"+usersSort[i].id+"'>ВНЕСТИ В ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user("+usersSort[i].id+")  id_user='"+usersSort[i].id+"'>ВИДАЛИТИ</button></a></td></tr>";
			}
			else{
			content_blacklist+="<tr><td><span id='firstName'>"+usersSort[i].firstName+"</span></td><td><span id='mail'>"+usersSort[i].email+"</span></td><td><span class='user'><strong>"+role_name_user+"</strong></span></td> <td></td><td></td></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user'  id_user='"+usersSort[i].id+"'>ВИНЕСТИ З ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user("+usersSort[i].id+")  id_user='"+usersSort[i].id+"'>ВИДАЛИТИ</button></a></td></tr>";
			}
		}
		else{
								
								content_administrationlist+="<tr><td><span id='firstName'>"+usersSort[i].firstName+"</span></td><td><span id='mail'>"+usersSort[i].email+"</span></td><td><span class='user'><strong>"+role_name_user+"</strong></span></td> <td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' id_user='"+usersSort[i].id+"'>ЗМІНИТИ СТАТУС</button></a></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user("+usersSort[i].id+")  id_user='"+usersSort[i].id+"'>ВИДАЛИТИ</button></a></td></tr>";
								}								
				
		}
		//console.log(Model.date.Users[i]); button_change_status
		}
	}
		// var d=document.getElementById('filter').options.selectedIndex;
	

	place_for_table.innerHTML = content_table;
	// var c = [];
	// c = content_table;
	// var v = c.id;
	// console.log(c);

	place_for_blacklist.innerHTML = content_blacklist;
	place_for_administrationlist.innerHTML = content_administrationlist;
	// Model.date.User_roles[Model.date.Users[i].role_id].role_name
var buttons_status =document.querySelectorAll('.button_change_status');
	for(var i = 0;i<buttons_status.length;i++){
		buttons_status[i].addEventListener("click", chengestatus);
	}

var button_banned_user =document.querySelectorAll('.button_banned_user');
	for(var i = 0;i<button_banned_user.length;i++){
	button_banned_user[i].addEventListener("click", button_banned_users);
	}
}
showAll();


var search_user = document.getElementById('search-input');
//console.log(search_user);
var search_banned_user = document.getElementById('blacklist_search-input');
//console.log(search_banned_user);

search_user.addEventListener("keyup", function(){
		place_for_table.innerHTML = '';
		var content_table = '';
		var value = search_user.value;
		if(value.replace(/^\s+|\s+$/g, '') === ''){
			showAll();
		}else{
		for(var i = 0;i<Model.date.Users.length;i++){
			if (Model.date.Users[i].role_id == 1 && Model.date.Users[i].banned == 0){
				if(Model.date.Users[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase())+1){
					for( j = 0; j < Model.date.User_roles.length; j++){
						if (Model.date.Users[i].role_id == Model.date.User_roles[j].id) {
							var role_name_user = Model.date.User_roles[j].role_name;
							content_table+="<tr><td><span id='firstName'>"+Model.date.Users[i].firstName+"</span></td><td><span id='mail'>"+Model.date.Users[i].email+"</span></td><td><span class='user'><strong>"+role_name_user+"</strong></span></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' id_user='"+Model.date.Users[i].id+"'>ЗМІНИТИ СТАТУС</button></a></td><td><button  class='btn btn-warning btn-xs'>ЗАБАНИТИ</button></td><td><button  class='btn btn-danger btn-xs'>ВИДАЛИТИ</button></td></tr>";
						}
					}
				}
			}
		}
		place_for_table.innerHTML = content_table;

var buttons_status =document.querySelectorAll('.button_change_status');
for(var i = 0;i<buttons_status.length;i++){
	buttons_status[i].addEventListener("click", chengestatus);
}
	}	

})

search_banned_user.addEventListener("keyup", function(){
	place_for_blacklist.innerHTML = '';
	var content_blacklist = '';
	var value = search_banned_user.value;
	if (value.replace(/^\s+|\s+$/g, '') === '') {
		showAll();
	} else{
		for(var i = 0;i<Model.date.Users.length;i++){
			if (Model.date.Users[i].banned == 1) {
				if(Model.date.Users[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase())+1){
					for( j = 0; j < Model.date.User_roles.length; j++){
						if (Model.date.Users[i].role_id == Model.date.User_roles[j].id) {
							var role_name_user = Model.date.User_roles[j].role_name;
							content_blacklist+="<tr><td><span id='firstName'>"+Model.date.Users[i].firstName+"</span></td><td><span id='mail'>"+Model.date.Users[i].email+"</span></td><td><span class='user'><strong>"+role_name_user+"</strong></span></td> <td></td><td></td></td><td><button  class='btn btn-warning btn-xs'>РОЗБАНИТИ</button></td><td><button  class='btn btn-danger btn-xs'>ВИДАЛИТИ</button></td></tr>";
						}
					}
				}
			}
		}
		place_for_blacklist.innerHTML = content_blacklist;
		}
})
// console.log(document.querySelectorAll('.button_change_status'));
var buttons_status =document.querySelectorAll('.button_change_status');
for(var i = 0;i<buttons_status.length;i++){
	buttons_status[i].addEventListener("click", chengestatus);
}

function get_user_by_id(user_id){
	var Users = Model.date.Users;
	for(var i = 0;i<Users.length;i++){
		if(Users[i].id == user_id){
			var catch_user = Users[i];
			break;
		}
	}
	return catch_user;
	console.log(catch_user)
}

/////////////////////////////////////////////////////////////////////////


// function chengestatus(e){
// 	var attribute = e.target.getAttribute('id_user');
// 	var current_user = get_user_by_id(attribute);
// 	if(current_user.role_id == 1){
// 		current_user.role_id = 2;
// 		console.log("id=>"+current_user.role_id);
// 		Model.save_localStorage();
// 		showAll();
// 	}
// 	else{
// 		if(current_user.role_id == 2){
// 			current_user.role_id = 3;
// 			console.log("id=>"+current_user.role_id);
// 			Model.save_localStorage();
// 			showAll();
// 		}
// 		else{
// 			current_user.role_id = 1;
// 			console.log("id=>"+current_user.role_id);
// 			Model.save_localStorage();
// 			showAll();
// 		}
// 	}
// 	}