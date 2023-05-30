import { Schema, model } from 'mongoose';
var Categoriemodel = Schema({
   
    name: String,
    description: String,
    image: String,
    products:[[{ type: Schema.Types.ObjectId, ref:'Product' }]]
   
}, { timestamps: true });


export default model('Categorie', Categoriemodel);