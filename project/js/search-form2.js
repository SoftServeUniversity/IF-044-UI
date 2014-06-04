var place_for_table = document.getElementById('usersTable');
console.log(Model.date.Users);
function showAll(){
	var content_table = '';
	for(var i = 0;i<Model.date.Users.length;i++){
		content_table+="<tr class='col-12 xs'><td><span id='firstName'>"+Model.date.Users[i].name+"</span></td><td><span id='mail'>"+Model.date.Users[i].email+"</span></td><td><span class='user'><strong>"+Model.date.User_roles[Model.date.Users[i].role_id].role_name+"</strong></span></td> <td></td><td><button  class='btn btn-success btn-xs' onclick='changestatus()'>ЗМіНИТИ СТАТУС</button></td><td><button  class='btn btn-warning btn-xs'>В ЧОРНИЙ СПИСОК</button></td><td><button  class='btn btn-danger btn-xs'>ВИДАЛИТИ</button></td></tr>";
		console.log(Model.date.Users[i]);
	}
	place_for_table.innerHTML = content_table;
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
			if(Model.date.Users[i].name.toString().toLowerCase().indexOf(value.toLowerCase())+1){
				content_table+="<tr><td><span id='firstName'>"+Model.date.Users[i].name+"</span></td><td><span id='mail'>"+Model.date.Users[i].email+"</span></td><td><span class='user' id='change'><strong>"+Model.date.User_roles[Model.date.Users[i].role_id].role_name+"</strong></span></td> <td></td><td><button  class='btn btn-success btn-xs' onclick='changestatus()'>ЗМіНИТИ СТАТУС</button></td><td><button  class='btn btn-warning btn-xs'>В ЧОРНИЙ СПИСОК</button></td><td><button  class='btn btn-danger btn-xs'>ВИДАЛИТИ</button></td></tr>";
			}
		}
		place_for_table.innerHTML = content_table;
		}

})

// function chengestatus(){
// 	tr.parant.child('user')
// 	if(Modal.data.Users_roles.roles_id = 0){
// 		Modal.data.Users[0].role_id = 1;
// 		Modal.save.localStorage();
// 	}else{if(Modal.data.)
// 	}
// }