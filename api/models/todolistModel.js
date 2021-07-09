'use strict'

//here we are requiring mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//we are creating a new schema here with name, created date and status properties
//schema for defining the structure of our app/document
var TaskSchema = new Schema({
    name:{
        type:String,
        required:"kindly enter the name of the task"
    },
    Created_date:{
        type:Date,
        default: Date.now
    },
    status:{
        type:[{
            type:String,
            enum:['pending','ongoing','completed']
        }],
        //if not, the default value is pending
        default:['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);