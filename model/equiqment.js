var mongoose = require('mongoose');
var autoIncre = require('mongoose-auto-increment');
var db = require('./../config');

const schema = mongoose.Schema;
const equiq= new schema({
    eqID:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true,

    },
    status:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:false

    },
    type:{
        type:Number,
        required:true

    },
    emID:{
        type:Number,
        required:false
    }
})
const equiqModel = mongoose.model('Equiqment', equiq);
autoIncre.initialize(mongoose.connection);
equiq.plugin(autoIncre.plugin, {model:'Equiqment', field:'eqID'})
module.exports={
    equiqModel
}