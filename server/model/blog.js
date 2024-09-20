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

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogStructure);
