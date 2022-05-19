const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const linkSchema=new Schema({
    link : String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('link', linkSchema)