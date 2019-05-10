console.log('login.js loaded')

// we create a variable isLoggedIn that we set to false; we can use this to verify if the user is logged in or not 
var isLoggedIn = false; 

// this function returns the users from the localStorage 
var users = getSavedUsers()

// This function gets the username and password from the input fields 
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

// We create a for loop to loop through the users 	
	for (var i = 0; i < users.length; i++) {
		// checks if user input matches username and password of a current index of the users array
		if (username == users[i].username && password == users[i].password) {
			alert(username + " is logged in");
			// if the user is logged in, we set isLoggedIn to true
			isLoggedIn = true; 
			location.assign('frontpage.html');
			// stop the function if this is found to be true
			return;
		}
	}
// If none of the users matched the username or password, we give the following alert 
alert("incorrect username or password")
}