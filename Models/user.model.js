import { Schema, model } from 'mongoose';
var UserModel = Schema({
    mail: { type: String, require: true },
    password: { type: String, require: true },
    name: String,
    photo: String,
    oreder: String,
    adresse: String,
    phone: String,
    code :Number
}, { timestamps: true });


export default model('User', UserModel)