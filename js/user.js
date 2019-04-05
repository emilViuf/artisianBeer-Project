console.log("user.js loaded")


class User {
    constructor(firstName, lastName, dob, email, phone, street, number, zipCode, city, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
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
        this.password = password
    }
}
