const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then( ()=>{
        console.log("Connection Successful !")
    } )

    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // the mongoose.connect() returns a promise so we can get the await function
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User = mongoose.model("User",userSchema);


User.findOneAndUpdate({name:"Shradha"},{age:35},{new:true})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })











// Data Incertion


// User.insertMany([
//     {name:"Shradha",email:"shradha@yahoo.com",age:25},
//     {name:"Sovit",email:"sovitroy343@gmail.com",age:22},
//     {name:"Popatlal",email:"Popatlal@gmail.com",age:42}
// ])
//     .then((res)=>{
//         console.log(res)
//     })

// const User3 = new User({
//     name:"Mohini Hazra",
//     email:"hazramohini48@gmail.com",
//     age:20
// })
// User3
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

