import  Order  from "../Models/Order.model";
require("dotenv").config();



export async function create(req, res) {
    const Orders = new Order({ ...req.body });
    console.log({ ...req.body });

    Orders.photo = `/img/${req.file.filename}`;

    await Orders.save();

    if (Orders)
        res.status(200).json(Orders);
    else {
        res.status(400).json({ Message: "Can't create this Order " });
    }
}
export async function getOrders(req, res) {
    const Orders = await Order.find();
    res.status(200).json(Orders);
}
export async function update(req, res) {
    const Order = new Order(req.body);
    Order.photo = `/img/${req.file.filename}`;

    const newOrder = await Order.updateOne(
        { _id: Order._id },
        Order
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
    const Order = await Order.find().or([{ name }]);
    if (Order) {
        res.json(Order);
    } else {
        res.json({ Messager: "erroooor" });
    }
}
