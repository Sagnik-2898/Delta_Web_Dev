
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
const orderSchema = new Schema({
    item: String,
    price: Number,
})

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type : Schema.Types.ObjectId,
            ref :"Order"
        }
    ]
})

const Order = mongoose.model("Order",orderSchema)
const Customer = mongoose.model("Customer",customerSchema)

const addCustomer = async () =>{
    let cust1 = new Customer({
        name:"Sagnik Banerjee",
    })

    let order1 = await Order.findOne({item:"Lays"})
    let order2 = await Order.findOne({item:"Maaza"})

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result)
}
addCustomer()



// const addOrders = async() =>{
//     let res = await Order.insertMany([
//         {item:"Maaza",price:25},
//         {item:"Lays",price:15},
//         {item:"Kurkure",price:30}
//     ]);
//     console.log(res);
// }
// addOrders();