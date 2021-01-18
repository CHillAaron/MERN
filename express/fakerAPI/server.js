const express = require("express");
const cors = require("cors");
const port = 8000
const app = express();
const faker = require("faker")


app.use(express.json()); //gives us the ability to work with json. 

class User{
    constructor(){
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            address : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zip : faker.address.zipCodeByState(),
            country : faker.address.country()
        }
        
    }
}

app.get("/api/users/new", (req,res) => {

    const user1 = new User()

    res.json(user1)
})

app.get("/api/company/new", (req,res) => {

    const company1 = new Company()
    console.log(company1)
    res.json(company1)
})

app.get("/api/users/company/new", (req,res) => {
    const user1 = new User()
    const company1 = new Company()
    console.log(company1)
    res.json({"user":user1, "company": company1})
})
// app.get ("/" , (req, res) => {
//     res.json({"message": "ok"});
// })

app.listen(port, () => console.log(`Listening on port ${port}`));