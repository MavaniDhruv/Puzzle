const mongoose = require('mongoose');

const useransSchema = new mongoose.Schema({
    user_ans:{
        type:String
    }
})

module.exports = mongoose.model('userans',useransSchema)