import { Schema, model } from 'mongoose';
var OrderItemModel = Schema({
   
    name: String,
    prix: Number,
    quantity: Number,
    itemImage: String,
    product: [{ type: Schema.Types.ObjectId, ref:'Product' }],
    totale_order_items: Number,
    
},

{ timestamps: true });


export default model('OrderItem', OrderItemModel);