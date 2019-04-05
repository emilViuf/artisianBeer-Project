console.log("registration.js loaded")

// Create a binding for each UI (user interface) element on the html panel

const firstNameUI = document.getElementById("firstName")
const lastNameUI = document.getElementById("lastName")
const dobUI = document.getElementById("dob")
const genderUI = document.getElementById ("gender")
const emailUI = document.getElementById ("email")
const phoneUI = document.getElementById ("phone")
const streetUI = document.getElementById ("street")
const numberUI = document.getElementById ("houseNumber")
const zipUI = document.getElementById ("zip")
const cityUI = document.getElementById ("city")
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
    || streetUI.value.length == 0 || numberUI.value.lengh == 0
    || zipUI.value.lengh == 0 || cityUI.value.lengh == 0
    || usernameUI.value.length == 0 || passwordUI.value.length == 0 
    || !checkboxUI.checked) {

        alert("please input details")
        return false
        // means please stop do not do anything
        // we are checking of one of them is empty

    } 

// We need to implement type of evaluation of the provided data
// For the names only characters + space + dash

// 1. Evaluate if email 

function validateEmail(email) {
    var emailUIcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailUIcheck.test(String(email).toLowerCase());
}

if (!validateEmail(emailUI.value)){
    alert("You have entered an invalid email address!")
    return (false)
}

// 2. Evaluate if phone number fits criteria of 8 digits

if (phoneUI.value.length !== 8) {

    alert ("Phone number requires 8 digits")
    return false
}

// 3. Evaluate if Zip Code is within Cph

if (zipUI.value < 1000 || zipUI.value > 3000) {
    alert ("We only deliver within Copenhagen area")
    return false
}


// Add additional checks 

    console.log ("User registered")

    users.push(new User(firstNameUI.value, lastNameUI.value, dobUI.value, 
    genderUI.value, emailUI.value, phoneUI.value, streetUI.value, numberUI.value, 
    zipUI.value, cityUI.value, usernameUI.value, passwordUI.value)); 

// save the user to local storage
