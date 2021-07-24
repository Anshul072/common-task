const mongoose = require("mongoose");


const {Schema}= mongoose;

const postSchema =new Schema({ 
    title:{
        type :String,
        required :true,
        minlength:2
    },
    description:{
        type:String,
        required: true,
        minlength:2
    },
    date:{
        type: Date,
        default:Date.now
    },
})

module.exports = postSchema