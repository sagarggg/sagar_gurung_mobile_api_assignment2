'use strict';
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');


    exports.listTasks = function(req,res){
        //list objects
        Task.find({},function(err,task){
            if(err)
                res.send(err);
            res.json(task);
        });
    };

    //create a new tasks
    exports.createTasks = function(req,res){
        var new_task = new Task(req.body); //requet new body
        new_task.save(function(err,task){
            //if there is a error throw error if not repsosnd with json data
            if(err)
                res.send(err);
            res.json(task)
        })
    };

    //get a specific task by id
    exports.listSpecificTask = function(req,res){
        Task.findById(req.param.taskId, function(err,task){
            //if there is a error throw error if not repsond with json data
            if(err)
                res.send(err);
            res.json(task);
        });
    };

    //put a specific task using id
    exports.updateSpecificTask = function(req,res){
        //find the document first, update the document nd return it
        //here we are passsing the task id to recognize the task to be updated
        Task.findOneAndUpdate({_id: req.param.taskId}, req.body, {new:true} ,function(err,task){
            //if there is a error throw error if not repsond with json data
            if(err)
                res.send(err);
            res.json(task);
        });
    };

    //delete a specific task by id
    exports.deleteSpecificTask = function(req,res){
        //delete the taks by passing the task id here
        Task.deleteOne({_id: req.param.taskId}, function(err,task){
            //if there is a error throw error if not repsond with json data
            if(err)
                res.send(err);
            //show message that it is deleted
            res.json({message: "Task successfully deleted"});
        });
    };