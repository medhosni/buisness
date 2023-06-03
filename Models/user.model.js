import { Schema, model } from 'mongoose';
var UserModel = Schema({
    email: { type: String, require: true },
    password: { type: String, require: true , unique: true},
    username: String,
    fullname:String,
    profileImage: String,
    oreder: [String],
    adresse: String,
    phoneNumber: Number,
    matriculeFiscale:String,
    token:String,
    code :{ type: Number, default: "0000" }
}, { timestamps: true });


export default model('User', UserModel)