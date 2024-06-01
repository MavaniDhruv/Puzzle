const mongoose = require("mongoose");

const puzzleSchema = new mongoose.Schema({
    puz_name:{
        type:String
    },
    puz_img:{
        type:String
    },
    random_char:{
        type:String
    },
    win_id:{
        type:Array,
        default:0
    },
    cate_id:{
        type:String
    }
})

module.exports = mongoose.model('puzzle',puzzleSchema)