console.log("registration.js loaded")

// Create a binding for each UI (user interface) element on the html panel

const firstNameUI = document.getElementById("firstName")
const lastNameUI = document.getElementById("lastName")
const dobUI = document.getElementById("dob")
const genderUI = document.getElementById ("gender")
const emailUI = document.getElementById ("email")
const phoneUI = document.getElementById ("phoneNumber")
const addressUI = documenr.getElementById ("address")
const usernameUI = document.getElementById("username")
const passwordUI = document.getElementById ("password")
const checkboxUI = document.getElementById ("checkbox")
const submitUI = document.getElementById ("submit-button")

// Now we have linked them all up
// Add functionality to the button click
// Create a function that responds to a click on the submit button

submitUI.onclick = function () {
    console.log("button was clicked")

 if(firstNameUI.value.length == 0 || lastNameUI.value.length == 0 
    || dobUI.value.length == 0 || genderUI.value.length == 0 
    || emailUI.value.length == 0 || phoneUI.value.length == 0
    || addressUI.value.length == 0 || usernameUI.value.length == 0 
    || passwordUI.value.length == 0 || !checkboxUI.checked) {

        console.log("please input details")
        return false
        // means please stop do not do anything
        // we are checking of one of them is empty

    } 
// We need to implement type of evaluatoion of the provider data
// For the names only characters + space + dash

    console.log ("User registered")

    users.push(new User(firstNameUI.value, lastNameUI.value, dobUI.value, 
    genderUI.value, emailUI.value, phoneUI.value, addressUI.value, usernameUI.value, 
    passwordUI.value))

}

// 