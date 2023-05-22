import  OrderItem  from "../Models/OrderItem.model";
require("dotenv").config();



export async function create(req, res) {
    const OrderItems = new OrderItem({ ...req.body });
    console.log({ ...req.body });

    OrderItems.photo = `/img/${req.file.filename}`;

    await OrderItems.save();

    if (OrderItems)
        res.status(200).json(OrderItems);
    else {
        res.status(400).json({ Message: "Can't create this OrderItem " });
    }
}
export async function getOrderItems(req, res) {
    const OrderItems = await OrderItem.find();
    res.status(200).json(OrderItems);
}
export async function update(req, res) {
    const OrderItem = new OrderItem(req.body);
    OrderItem.photo = `/img/${req.file.filename}`;

    const newOrderItem = await OrderItem.updateOne(
        { _id: OrderItem._id },
        OrderItem
    );

    if (newOrderItem == null) {
        return res.status(400).json({ message: "not updated " });
    } else {
        console.log(newOrderItem);
        res.status(200).json(newOrderItem);
    }
}
export async function search(req, res) {
    const { name } = req.body;
    const OrderItem = await OrderItem.find().or([{ name }]);
    if (OrderItem) {
        res.status(200).json(OrderItem);
    } else {
        res.status(400).json({ Messager: "erroooor" });
    }
}
