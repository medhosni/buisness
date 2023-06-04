import { Schema, model } from 'mongoose';
var OrderModel = Schema({
   
    name: String,
    order_item: [{ type: Schema.Types.ObjectId, ref:'OrderItem' }],
    user: [{ type: Schema.Types.ObjectId, ref:'User' }],
    totalePaid: Number,
    unite: Number,
    confirmed: {type:Boolean, default: false},
    isverified: {type:Boolean, default: false},
    busket: {type:Boolean, default: false},
}, { timestamps: true });


export default model('Order', OrderModel);