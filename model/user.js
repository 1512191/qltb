const mongoose=require('mongoose');
const Schema = mongoose.Schema;
var db=require('./../config');
const bcrypt = require('bcrypt');
const autoIncrement = require('mongoose-auto-increment');
const validator = require('validator')
var employee = new Schema({
    emID:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true, 
        unique: true,
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    password:{
        type:String, 
        required:true
    },
    role:{
        type:Number,
        required:true,
        default:0
    }
    
}, {strict: true})
const employModel=mongoose.model('Employee', employee);
autoIncrement.initialize(mongoose.connection);
employee.plugin(autoIncrement.plugin,{model:'Employee', field:'emID'});
module.exports={
    employModel
}