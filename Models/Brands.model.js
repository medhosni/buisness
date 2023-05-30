import { Schema, model } from 'mongoose';
var Brandmodel = Schema({
   
    name: String,
    logo: String,
  
   
}, { timestamps: true });


export default model('Brand', Brandmodel);