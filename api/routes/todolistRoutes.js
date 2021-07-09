'use strict'

module.exports = function(app){
    //referencing the controller file inside the controller folder
    //so that our app can use/call the methods/functions created in the controller file
    var todoList = require('../controllers/todolistController');

//get tasks
//creating a route
app.route('/tasks')
//this .get will get all of our tasks lists
    .get(todoList.listTasks)
    //if route is post, .post will use the createTask func
    .post(todoList.createTasks);


//route for speific task
app.route('/tasks/:taskId')
    //.get will call/use the 'listSpecificTask' functions we have on our controller file to get specific task
    .get(todoList.listSpecificTask)
    //.put will call/use the 'updateSpecificTask' functions we have on our controller file to get specific task
    .put(todoList.updateSpecificTask)
    //.delete will call/use the 'deleteSpecificTask' functions we have on our controller file to get specific task
    .delete(todoList.deleteSpecificTask)

};
