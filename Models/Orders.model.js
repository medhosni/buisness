import { Schema, model } from 'mongoose';
var OrderModel = Schema({
   
    name: String,
    order_item: String,
    user: String,
    totale_paid: String,
    unite: String,
    confirm: Boolean,
    isverified: Boolean,
    busket: Boolean,
}, { timestamps: true });


export default model('Order', OrderModel);