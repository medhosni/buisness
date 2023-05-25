import  Order  from "../Models/Orders.model.js";
import {} from 'dotenv/config'



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
    Order.find({}).then(neworders=>{
        res.status(200).json(neworders);

    }).catch(err =>{
        res.status(400).json(err);
    })
    
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
export async function search(req, res) {
    const { name } = req.body;
    const orders = await Order.find().or([{ name }]);
    if (orders) {
        res.json(orders);
    } else {
        res.json({ Messager: "erroooor" });
    }
}
