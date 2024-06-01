const categoryModel = require('../model/categoryModel');
const puzzleModel = require('../model/puzzleModel');
const userModel = require('../model/userModel');

exports.login = async (req,res)=>{
    var data = await userModel.find({"email":req.body.email});

    if(data.length>0){
        if(data[0].password==req.body.password){
            res.status(200).json({
                status:"login success"
            })
        }else{
            res.status(200).json({
                status:"Check Your Email And Password"
            })
        }
    }else{
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.register = async(req,res)=>{
    var data = await userModel.create(req.body);

    res.status(200).json({
        status:"Data Register",
        data
    })
}

exports.category = async(req,res)=>{
    var data = await categoryModel.find().select();

    var total_cate = await categoryModel.find().count();

    res.status(200).json({
        status:"All Category Selected",
        total_cate,
        data
    })
}

exports.categoryId = async(req,res)=>{
    var id = req.params.id;

    var data = await categoryModel.findById(id);

    res.status(200).json({
        status:"One Category Selected",
        data
    })
}

exports.puzzleId = async(req,res)=>{
    var id = req.params.id;

    var data = await puzzleModel.findById(id);

    res.status(200).json({
        status:"One Puzzle Selected",
        data
    })
}

exports.winId = async(req,res)=>{
    var puz_id = req.params.id;

    var data = await puzzleModel.findById(puz_id);

    var id = [];

    id = data.win_id;

    if(data.puz_name==req.body.ans){
        id.push("659d5009aaa6a77c63b421ed")
    }

    var update_data ={
        "win_id":id
    }

    var data = await puzzleModel.findByIdAndUpdate(puz_id,update_data);

    res.status(200).json({
        status:"Ans Submit",
        data
    })
}