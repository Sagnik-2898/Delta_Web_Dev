const mongoose = require('mongoose');
const Chat = require ("./models/chat.js")


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
main()
    .then(()=>{
        console.log("Connection is running")
    })
    .catch(()=>{
        console.log("Error")
    })

let allchats = [{
    from:"Mohini",
    to:"Sagnik",
    msg:"I love you too",
    created_at: new Date()
},
{
    from:"Sagnik",
    to:"Aniket",
    msg:"Hello bro",
    created_at: new Date()
},
{
    from:"Rounak",
    to:"Aniket",
    msg:"Hello bara",
    created_at: new Date()
},
{
    from:"Sagnik",
    to:"Rounak",
    msg:"Hello bhai",
    created_at: new Date()
},{
    from:"Sagnik",
    to:"Arpan",
    msg:"heyy bro",
    created_at: new Date()
},
{
    from:"Sagnik",
    to:"Sovit",
    msg:"Miss you bro",
    created_at: new Date()
}
]



Chat.insertMany(allchats)

