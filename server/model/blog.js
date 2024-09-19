const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogStructure=new Schema({
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    cat:{
        type:String,
        required:true
    }
    
},{timestamps: true });

const myBlog=mongoose.model('Blog', blogStructure);
module.exports = myBlog;