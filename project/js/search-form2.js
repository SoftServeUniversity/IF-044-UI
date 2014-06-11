var place_for_table = document.getElementById('usersTable');
console.log(Model.date.Users);


function chengestatus(e){
	var attribute = e.target.getAttribute('id_user');
	var current_user = get_user_by_id(attribute);
	if(current_user.role_id == 0){
		current_user.role_id = 1;
		console.log("id=>"+current_user.role_id);
		Model.save_localStorage();
		showAll();
	}
	else{
		if(current_user.role_id == 1){
			current_user.role_id = 2;
			console.log("id=>"+current_user.role_id);
			Model.save_localStorage();
			showAll();
		}
		else{
			current_user.role_id = 0;
			console.log("id=>"+current_user.role_id);
			Model.save_localStorage();
			showAll();
		}
	}
	}
function showAll(){
	var content_table = '';
	Model.load_localStorage();
	for(var i = 0;i<Model.date.Users.length;i++){
		content_table+="<tr><td><span id='firstName'>"+Model.date.Users[i].firstName+"</span></td><td><span id='mail'>"+Model.date.Users[i].email+"</span></td><td><span class='user'><strong>"+Model.date.User_roles[Model.date.Users[i].role_id].role_name+"</strong></span></td> <td></td><td><button class='btn btn-success btn-xs button_change_status' id_user='"+Model.date.Users[i].id+"'>ЗМІНИТИ СТАТУС</button></td><td><button  class='btn btn-warning btn-xs'>В ЧОРНИЙ СПИСОК</button></td><td><button  class='btn btn-danger btn-xs'>ВИДАЛИТИ</button></td></tr>";
		//console.log(Model.date.Users[i]);
	}
	place_for_table.innerHTML = content_table;
	
var buttons_status =document.querySelectorAll('.button_change_status');
for(var i = 0;i<buttons_status.length;i++){
	buttons_status[i].addEventListener("click", chengestatus);
}

}
showAll();
var search_user = document.getElementById('search-input');
console.log(search_user);

search_user.addEventListener("keyup", function(){
		place_for_table.innerHTML = '';
		var content_table = '';
		var value = search_user.value;
		if(value.replace(/^\s+|\s+$/g, '') === ''){
			showAll();
		}else{
		for(var i = 0;i<Model.date.Users.length;i++){
			if(Model.date.Users[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase())+1){
				content_table+="<tr><td><span id='firstName'>"+Model.date.Users[i].firstName+"</span></td><td><span id='mail'>"+Model.date.Users[i].email+"</span></td><td><span class='user'><strong>"+Model.date.User_roles[Model.date.Users[i].role_id].role_name+"</strong></span></td> <td></td><td><button  class='btn btn-success btn-xs button_change_status' id_user='"+Model.date.Users[i].id+"'>ЗМІНИТИ СТАТУС</button></td><td><button  class='btn btn-warning btn-xs'>В ЧОРНИЙ СПИСОК</button></td><td><button  class='btn btn-danger btn-xs'>ВИДАЛИТИ</button></td></tr>";
			}
		}
		place_for_table.innerHTML = content_table;

var buttons_status =document.querySelectorAll('.button_change_status');
for(var i = 0;i<buttons_status.length;i++){
	buttons_status[i].addEventListener("click", chengestatus);
}
		}

})
//console.log(document.querySelectorAll('.button_change_status'));
	console.log('function change status');
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
}


