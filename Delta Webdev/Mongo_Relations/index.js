const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => {
        console.log("Connected to db")
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/bhekbaji');
}
const userSchema = new Schema({
    name: String,
    address: [{
        _id: false, // it will not create extra id for every extra address entered
        location: String,
        city: String
    }]
})

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        name: "Sagnik Banerjee",
        address: [{
            location: "Street cb-243",
            city: "Newtown Kolkata"
        }]
    })

    user1.address.push({ location: "Dom goli Dhobghata", city: "Purulia" })
    let result = await user1.save();
    console.log(result);
}

addUsers()