import { Schema, model } from 'mongoose';
var Productmodel = Schema({
   
    name: String,
    image: String,
     description: String,
    unity: String,
    prixUnitaire: Number,
    categorie: [{ type: Schema.Types.ObjectId, ref:'Categorie' }],
    brand: [{ type: Schema.Types.ObjectId, ref:'Brand' }],
     colisage: String,
    description_seo: String,
    groupage:Number,
    prixGroupage :Number
}, { timestamps: true });


export default model('Product', Productmodel);