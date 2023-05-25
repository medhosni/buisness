import { Schema, model } from 'mongoose';
var OrderItemModel = Schema({
   
    name: String,
    prix: Number,
    quantite: Number,
    order_item_photo: String,
    order: String,
    product: Number,
    totale_order_items: Number,
    
}, { timestamps: true });


export default model('OrderItem', OrderItemModel);