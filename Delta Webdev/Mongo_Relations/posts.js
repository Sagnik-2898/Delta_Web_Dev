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
    username: String,
    email: String
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema)

const addData = async () => {
    // let user1 = new User({
    //     name: "Sovit Roy",
    //     email: "Sovit343golu@gmail.com"
    // })

    let user = await User.findOne({email:"sovit343golu@gmail.com"})

    let post2 = new Post({
        content: "Bye Byee",
        likes: 80,
    })

    post2.user = user;

    // let res1 = await user1.save()
    let res2 = await post2.save()
    console.log(res2)
}
addData()