function EditUserController() {
	this.currentUser;
}

EditUserController.prototype.getElement = function(id) {
	if (id) {
		return document.getElementById(id);
	}
};

EditUserController.prototype.fillData = function(index) {
	var domElement = this.getElement('username');
	
	if(Users && Users.length > 0 && Users[index]) {
		this.currentUser = Users[index];
		
		//alert('Location is ' + this.currentUser.location);
		
		if (this.currentUser.username) {
			domElement.value = this.currentUser.username;
			this.bindEvents(domElement);
		}
	}
};

EditUserController.prototype.bindEvents = function(element) {
	element.onchange = function(e) {
		if(!e.target.value) {
			alert(e.target.placeholder + ' value cannot be empty!');
		}
	}
};