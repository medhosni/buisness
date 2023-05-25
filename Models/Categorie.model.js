import { Schema, model } from 'mongoose';
var Categoriemodel = Schema({
   
    name: String,
    description: String,
    photo: String,
    products:[String]
   
}, { timestamps: true });


export default model('Brandct', Brandmodel);