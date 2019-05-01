console.log("database loaded")

// we can always get a copy of all users

function getSavedUsers() {
  let users;

  if (localStorage.getItem('users') === null) {
    users = [new User("Tatiana", "Andersen", "111281", "81tand@gmail.com",
      "51880545", "Ryparken", "23, 2 th", 2100, "Copenhagen", "Taty", "1234")];
  } else {
    users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      users[i] = new User(users[i].firstName, users[i].lastName, users[i].dob,
        users[i].email, users[i].phone, users[i].address.street, users[i].address.number,
        users[i].address.zipCode, users[i].address.city, users[i].username, users[i].password);
    }
  }

  return users

}

function saveUsers(data) {
  // Stringify users array
  const usersJSON = JSON.stringify(data)
  // Save users array in local storage
  localStorage.setItem('users', usersJSON)

}

