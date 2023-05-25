import { Schema, model } from 'mongoose';
var Productmodel = Schema({
   
    name: String,
    photo: String,
    oreder: String,
    description: String,
    unite: String,
    prix_unitaire: Number,
    categorie: String,
    brand: String,
    order_item: String,
    colisage: String,
    description_seo: String,
    groupage:Number,
    prix_groupage :Number
}, { timestamps: true });


export default model('Product', Productmodel);