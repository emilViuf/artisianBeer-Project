var users = [
	{ // Object #0 index
		username: "Emil",
		password: "12345"
	},
	{ // Object #1 index
		username: "Ramona",
		password: "12345"
	},
	{ // Object #2 index
		username: "Tatiana",
		password: "12345"
    }] 
    //^ would like to link this to your database.js instead, but its not really working?

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < users.length; i++) {
		// checks if user input matches username and password of a current index of the users array
		if(username == users[i].username && password == users[i].password) {
            alert(username + " is logged in");
            window.location = "x.html";
			// stop the function if this is found to be true
			return;
		}
	}
	alert("incorrect username or password")
}