console.log('login.js loaded')

var users = getSavedUsers()

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < users.length; i++) {
		// checks if user input matches username and password of a current index of the users array
		if (username == users[i].username && password == users[i].password) {
			alert(username + " is logged in");
			location.assign('frontpage.html');
			// stop the function if this is found to be true
			return;
		}
	}
	alert("incorrect username or password")
}