import { Schema, model } from 'mongoose';
var Brandmodel = Schema({
   
    name: String,
    Brand_logo: String,
  
   
}, { timestamps: true });


export default model('Brand', Brandmodel);