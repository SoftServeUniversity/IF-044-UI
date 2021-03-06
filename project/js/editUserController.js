'use strict'

function EditUserController() {
	this.currentUser;
}

// method get by id 

EditUserController.prototype.getElement = function(id) {
	if (id) {
		return document.getElementById(id);
	}
};

//Get current user

EditUserController.prototype.fillData = function(index) {
	var user = this.getElement('username');
	var passwd = this.getElement('passwd');
	var re_passwd = this.getElement('re_passwd');
	var email = this.getElement('email');
	var birthday = this.getElement('birthday1');

	if (Model.date.Users && Model.date.Users.length > 0 && Model.date.Users[index]) {
		this.currentUser = Model.date.Users[index];
		// alert('Location is ' + this.currentUser.location);
		first_name.value = this.currentUser.firstName;
		last_name.value = this.currentUser.lastName;
		org_level1.value = this.currentUser.org_level;
		org_troop1.value = this.currentUser.org_troop;
		org_region1.value = this.currentUser.org_region;

// if value empty

		if (this.currentUser.username) {
			user.value = this.currentUser.username;
			this.bindEvents(user);
		}
		if (this.currentUser.password) {
			passwd.value = this.currentUser.password;
			this.bindEvents(passwd);
		}
		if (this.currentUser.password) {
			re_passwd.value = this.currentUser.password;
			this.bindEvents(re_passwd);
		}
		if (this.currentUser.email) {
			email.value = this.currentUser.email;
			this.bindEvents(email);
		}
		if (this.currentUser.birthday) {
			birthday.value = this.currentUser.birthday;
			this.bindEvents(birthday);
		}

	}
};

function myfunction() {
	alert("Page was delete");
	window.location = "index.html"
}
// message 

EditUserController.prototype.bindEvents = function(element) {
	element.onchange = function(e) {
		if (!e.target.value) {
			alert(e.target.placeholder + ' value cannot be empty!');
		}
	}
};