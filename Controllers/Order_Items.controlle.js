import  OrderItem  from "../Models/Order_item.model.js";
import {} from 'dotenv/config'



export async function create(req, res) {
    const orderItems = new OrderItem({ ...req.body });
    console.log({ ...req.body });

   // orderItems.photo = `/img/${req.file.filename}`;
    orderItems.totale_order_items=req.body.prix*req.body.quantity
    await orderItems.save();

    if (orderItems)
        res.status(200).json(orderItems);
    else {
        res.status(400).json({ Message: "Can't create this OrderItem " });
    }
}
export async function getOrderItems(req, res) {
    const orderItem =await OrderItem.
    find({})
    .populate('product').
    exec();
if (orderItem!= null){
    res.status(200).json(orderItem);
}else{
    res.status(400).json({message :"errr"});
}
}
export async function update(req, res) {
OrderItem.findByIdAndUpdate({_id :req.body.id},{ ...req.body }).then(orderitem =>{
    res.status(200).json(orderitem)
}).catch(err => {
    res.status(500).json({err :err})
})
}
export async function addproduct(req, res) {
    


    
const orderItem = await OrderItem.findById({_id:req.body.id})
orderItem.product.push(req.body.product)


    OrderItem.findByIdAndUpdate({_id : req.body.id},orderItem).then(async newproduct => {
     
        res.status(200).json(newproduct);
    }).catch(err =>{
        return res.status(400).json({ err: err });
    })

}
export async function getOrderItem(req, res) {
    OrderItem.find({}).then(orderItem =>{
     res.status(200).json(orderItem)
    }).catch(err => res.status(400).json({message :err}))
 }
export async function getbyproduct(req, res) {
    const { product } = req.body;
    const orderItems = await OrderItem.find().or([{ product }]);
    if (orderItems) {
        res.status(200).json(orderItems);
    } else {
        res.status(400).json({ Messager: "erroooor" });
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

export async function deleteorderitem(req, res) {
  OrderItem.findByIdAndDelete({_id : req.body.id}).then(orederitem => {
    res.status(200).json({message :" deleted"})
  }).catch(err=>{
    res.status(500).json({err :err})
    
  })
}
