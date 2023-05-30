import { Schema, model } from 'mongoose';
var OrderModel = Schema({
   
    name: String,
    order_item: [{ type: Schema.Types.ObjectId, ref:'OrderItem' }],
    user: [{ type: Schema.Types.ObjectId, ref:'User' }],
    totalePaid: Number,
    unite: Number,
    confirmed: Boolean,
    isverified: Boolean,
    busket: Boolean,
}, { timestamps: true });


export default model('Order', OrderModel);