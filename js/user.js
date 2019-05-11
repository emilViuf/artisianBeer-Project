// We create a User class with properties (firstName, lastName, ...)
// The way we give value to User properties is through the parameters of the constructor
// The values of the parameters get assigned to the properties of the user
class User {
    constructor(fullName, dob, email, phone, street, number, zipCode, city, username, password) {
        this.fullName = fullName;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
        this.address = {
            street: street,
            number: number,
            zip: zipCode,
            city: city
        }
   
        this.username = username;
        this.password = password;
        
    }
}
