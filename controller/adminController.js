const adminModel = require('../model/adminModel');
const categoryModel = require('../model/categoryModel');
const puzzleModel = require('../model/puzzleModel');
const userModel = require('../model/userModel');

exports.login = async (req,res)=>{
    var data = await adminModel.find({"email":req.body.email});

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

exports.addCategory = async (req,res)=>{
    var data = await categoryModel.create(req.body);

    var image = req.body.image; 

    res.status(200).json({
        status:"Category added",
        data
    })
}

exports.addPuzzle = async (req,res)=>{

    var name = req.body.puz_name;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    var arr=[];

    for(let i=0;i<=10;i++){
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        result += randomLetter;
    }
    for(let i=0;i<=100;i++){
        var randomChar = name[Math.floor(Math.random() * name.length)];
        if(arr.includes(randomChar)==false){
            arr.push(randomChar);
        }
    }

    var final = result+arr.join('');

    req.body.random_char = final;

    var data = await puzzleModel.create(req.body)

    var image = req.body.image;

    res.status(200).json({
        status:"Puzzle added",
        data
    })
}

exports.allUser = async (req,res)=>{
    var all_user = await userModel.find().select();

    var total_user = await userModel.find().count();

    res.status(200).json({
        status:"All Users Selected",
        total_user,
        all_user
    })
}