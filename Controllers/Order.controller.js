import  Order  from "../Models/Orders.model.js";
import {} from 'dotenv/config'
import  User  from "../Models/user.model.js";
import  OrderItem  from "../Models/Order_item.model.js";

//create order if not exist else if existe update order add orderitems in array of orderitems 
export async function create(req, res) {
    const orders = new Order({ ...req.body });
   
    
    const orders4 = await Order.findOne( {user:req.body.user});

console.log(orders4)
if(orders4!=null){
    if (orders4.busket== false){
        console.log(orders4)
        await orders.save();

        if (orders)
            res.status(201).json(orders);
        else {
            res.status(402).json({ Message: "Can't create this Order " });
        }
    }else {
        console.log(orders4)
        req.body.order_item.forEach(element =>{orders4.order_item.push(element)
        console.log(orders4)
        }
        );
        
        Order.findByIdAndUpdate({_id : orders4._id},orders4).then(async newproduct => {
     
            res.status(202).json(newproduct);
        }).catch(err =>{
            return res.status(400).json({ err: err });
        })
    
       
    }}else{
        await orders.save();

        if (orders)
            res.status(201).json(orders);
        else {
            res.status(402).json({ Message: "Can't create this Order " });
        }
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
//confirme the order confirme = true busket =false 
export async function update(req, res) {
    const orders = new Order(req.body);
   

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
export async function confirme(req, res) {
 Order.findByIdAndUpdate({_id:req.body.id},{
    confirmed:true,
    busket:false
 }).then(newOrder =>{
    res.status(200).json(newOrder);
 }).catch(err =>{
    res.status(400).json({ message: "not updated " });
 })
   

    


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
