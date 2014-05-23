  (function() { 
    var loginButton = document.getElementById('loginButton');
	var email = document.getElementById('inputEmail3');
    var password = document.getElementById('inputPassword3');
    var closeButton = document.getElementById('closeButton');
    var res1, res2, currentUser; 

	        function errorEmail() {
               console.log('Не правильно введенна Пошта');
            };

             function errorPassword() {
             	console.log('Не правильно введенний Пароль'); 
             };

    function postWishMsg() {
       alert('Вітаю ' + Users[currentUser].name +'!')
    }         

     function clearForms() {
       closeButton.onclick = function () {
         return true;
       };
     }        
  
    loginButton.onclick = function() {
 
        	
        	for(var i = 0; i<Users.length; i++ ) {
        		if(Users[i].email == email.value) {
        			res1 = true;
        			currentUser = i;
        			break;
        		} else {
        			res1 = false;
        		};
        		
        	}; 
       
       
        	
        	if(currentUser >= 0) {
        			if(Users[currentUser].password == password.value){
        				res2 = true;
        			} else {
        				res2 = false;
        			};
        			
        		};
        		
       
        

        var Error = false;
        
      
        if(res1 == false){
             errorEmail();
             Error = true;
        };

        if(res2 == false){
             errorPassword()
             Error = true;
        };

        if(!Error){ 
            postWishMsg();
            clearForms();
        };
        return false;
    };
})()
