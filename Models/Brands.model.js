import { Schema, model } from 'mongoose';
var Brandmodel = Schema({
   
    name: String,
    Brand_logo: String,
    products: [String],
   
}, { timestamps: true });


export default model('Brandct', Brandmodel);