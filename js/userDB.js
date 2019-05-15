
//  We create a function to get a copy of all users from the localStorage

function getSavedUsers() {
  let users;
  // we check if there are any users in localStorage 
  // If there aren't any, we create a new default user, Tatiana

  if (localStorage.getItem('users') === null) {
    users = [new User("Tatiana Andersen", "111281", "81tand@gmail.com",
      "51880545", "Ryparken", "23", "2100", "Copenhagen", "Taty", "1234")];
  } else {
    users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {

      // we create a new user and save it to the users array 
      users[i] = new User(users[i].fullName, users[i].dob,
        users[i].email, users[i].phone, users[i].address.street, users[i].address.number,
        users[i].address.zipCode, users[i].address.city, users[i].username, users[i].password);
    }
  }
  return users
}
// Stringify users array
// Save users array in local storage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users))
}

