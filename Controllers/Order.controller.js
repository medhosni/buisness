import  Order  from "../Models/Orders.model.js";
import {} from 'dotenv/config'
import  User  from "../Models/user.model.js";
import  OrderItem  from "../Models/Order_item.model.js";


export async function create(req, res) {
    const orders = new Order({ ...req.body });
    console.log({ ...req.body });

    orders.photo = `/img/${req.file.filename}`;

    await orders.save();

    if (orders)
        res.status(200).json(orders);
    else {
        res.status(400).json({ Message: "Can't create this Order " });
    }
}
export async function getOrders(req, res) {


    const order =await Order.
    find({})
    .populate('order_item user').
    exec();
if (order!= null){
    res.status(200).json(order);
}else{
    res.status(400).json({message :"errr"});
}

   
    
}
export async function update(req, res) {
    const orders = new Order(req.body);
    orders.photo = `/img/${req.file.filename}`;

    const newOrder = await orders.updateOne(
        { _id: orders._id },
        orders
    );

    if (newOrder == null) {
        return res.status(400).json({ message: "not updated " });
    } else {
        console.log(newOrder);
        res.status(200).json(newOrder);
    }
}
export async function getbyuser(req, res) {
    const { user } = req.body;
    const orders = await Order.find().or([{ user }]);
    if (orders) {
        res.json(orders);
    } else {
        res.json({ Messager: "erroooor" });
    }
}
export async function search(req, res) {
    const { name } = req.body;
    const orders = await Order.find().or([{ name }]);
    if (orders) {
        res.json(orders);
    } else {
        res.json({ Messager: "erroooor" });
    }
}