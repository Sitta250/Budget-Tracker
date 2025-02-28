const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactStructure=new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }

    
},{timestamps: true });

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactStructure);
