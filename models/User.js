const mongoose = require('mongoose');
// 스키마 생성
const userScheama  = mongoose.Schema({
    name: {
        type:String,
        maxlength:50

    },
    email :{
        type:String,
        trim:true,
        unique:5
    },
    lastname: {
        type:String,
        maxlength:50
    },
    role:{
        type : Number,
        defaualt:0
    },
    image: String,
    token:{
        type:toString
    },
    tokenExp:{
        type:Number
    }
})

//model을 만들어 스키마를 감싼다 
const User = mongoose.model('User',userScheama)

//model을 다른곳에서 쓸수있도록 exports
module.exports = {User}