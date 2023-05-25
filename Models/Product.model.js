import { Schema, model } from 'mongoose';
var Productmodel = Schema({
   
    name: String,
    photo: String,
    oreder: [{ type: Schema.Types.ObjectId, ref:'Order' }],
    description: String,
    unite: String,
    prix_unitaire: Number,
    categorie: [{ type: Schema.Types.ObjectId, ref:'Categorie' }],
    brand: [{ type: Schema.Types.ObjectId, ref:'Brand' }],
    order_item: [{ type: Schema.Types.ObjectId, ref:'OrderItem' }],
    colisage: String,
    description_seo: String,
    groupage:Number,
    prix_groupage :Number
}, { timestamps: true });


export default model('Product', Productmodel);