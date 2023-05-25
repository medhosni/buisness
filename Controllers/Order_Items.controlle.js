import  OrderItem  from "../Models/OrderItem.model";
import {} from 'dotenv/config'



export async function create(req, res) {
    const orderItems = new OrderItem({ ...req.body });
    console.log({ ...req.body });

    orderItems.photo = `/img/${req.file.filename}`;

    await orderItems.save();

    if (orderItems)
        res.status(200).json(orderItems);
    else {
        res.status(400).json({ Message: "Can't create this OrderItem " });
    }
}
export async function getOrderItems(req, res) {
    const orderItems = await OrderItem.find();
    res.status(200).json(orderItems);
}
export async function update(req, res) {
    const orderItems = new OrderItem(req.body);
    orderItems.photo = `/img/${req.file.filename}`;

    const newOrderItem = await orderItems.updateOne(
        { _id: orderItems._id },
        orderItems
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
    const orderItems = await OrderItem.find().or([{ name }]);
    if (orderItems) {
        res.status(200).json(orderItems);
    } else {
        res.status(400).json({ Messager: "erroooor" });
    }
}
