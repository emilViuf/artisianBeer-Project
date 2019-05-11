let users = getSavedUsers()

// Create a binding for each UI (user interface) element on the html panel

const fullNameUI = document.getElementById("fullName")
const dobUI = document.getElementById("dob")
const emailUI = document.getElementById("email")
const phoneUI = document.getElementById("phone")
const streetUI = document.getElementById("street")
const numberUI = document.getElementById("houseNumber")
const zipUI = document.getElementById("zip")
const cityUI = document.getElementById("city")
const usernameUI = document.getElementById("username")
const passwordUI = document.getElementById("password")
const checkboxUI = document.getElementById("checkbox")
const submitUI = document.getElementById("submit-button")

// Now we have linked them all up
// Add functionality to the click button
// Create a function that responds to a click on the submit button
// cehcks if all fields are set, if not, it returns false

submitUI.onclick = function () {
    console.log("button was clicked")

    if (fullNameUI.value.length == 0 || dobUI.value.length == 0 || emailUI.value.length == 0
        || phoneUI.value.length == 0 || streetUI.value.length == 0
        || numberUI.value.lengh == 0 || zipUI.value.lengh == 0
        || cityUI.value.lengh == 0 || usernameUI.value.length == 0
        || passwordUI.value.length == 0 || !checkboxUI.checked) {

        alert("please input details")
        return false
    }

    // We need to implement type of evaluation of the provided data

    var nameCheck = /^[A-Za-z- " "]+$/;
    if (!nameCheck.test(String(fullNameUI.value))) {
        alert("You have entered an invalid full name");
        return false;
    }


    if (dobUI.value.length === 0) {
        alert("Please enter a valid date of birth")
        return false;
    }
    var streetCheck = /^[A-Za-z ]+$/;
    if (!streetCheck.test(String(streetUI.value))) {
        alert("You have entered an invalid street name");
        return false;
    }

    var cityCheck = /^[A-Za-z ]+$/;
    if (!cityCheck.test(String(cityUI.value))) {
        alert("You have entered an invalid city name");
        return false;
    }
    // 1. Evaluate if email 

    function validateEmail(email) {
        var emailUIcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return emailUIcheck.test(String(email).toLowerCase());
    }

    if (!validateEmail(emailUI.value)) {
        alert("You have entered an invalid email address!")
        return false
    }

    // 2. Evaluate if phone number fits criteria of 8 digits

    if (phoneUI.value.length !== 8) {
        alert("Phone number is invalid")
        return false
    }

    // 3. Evaluate if Zip Code is within Cph

    if (zipUI.value < 1000 || zipUI.value > 3000) {
        alert("We only deliver within Copenhagen area")
        return false
    }

    // Create a new user from data and add him to the array of  users

    users.push(new User(fullNameUI.value, dobUI.value,
        emailUI.value, phoneUI.value, streetUI.value, numberUI.value,
        zipUI.value, cityUI.value, usernameUI.value, passwordUI.value));


    saveUsers(users)

    location.assign('login.html')

    // Save the user to local storage
}
