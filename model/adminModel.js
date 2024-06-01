const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    city:{
        type:String
    },
    contact:{
        type:Number
    }
})

module.exports = mongoose.model('admin',adminschema)