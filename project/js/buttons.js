window.onload = changestatus;

localStorage.Users = JSON.stringify(Users);
Users = JSON.parse(localStorage.Users);	

	function changestatus(){
		
		var q = Users[0].statusname;
		if(q != 'moderator' && q != 'administrator' ){
			localStorege.setItem('Users[0].statusname', 'moderator');
			document.getElementById('change').innerHTML = JSON.parse(Users[0].statusname);
		}
		else{
			if(q != 'moderator'){
			localStorege.setItem('Users[0].statusname', 'user');
			document.getElementById('change').innerHTML = JSON.parse(Users[0].statusname);
			}
			else{
				localStorege.setItem('Users[0].statusname', 'administrator');
				document.getElementById('change').innerHTML = JSON.parse(Users[0].statusname);
			}
}
};