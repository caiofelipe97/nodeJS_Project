var Todos = require('../models/todoModel');
var express = require('express');
var todoRouter = express.Router();

todoRouter.get('/todo', function(req, res) {
    
    Todos.find({}, function(err, todos) {
        if (err) throw err;
        
        res.send(todos);
    });
    
});

todoRouter.get('/todo/:id', function(req, res) {
   
   Todos.findById({ _id: req.params.id }, function(err, todo) {
       if (err) throw err;
       
       res.send(todo);
   });
    
});

todoRouter.post('/todo', function(req, res) {
    
    if (req.body.id) {
        Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
            if (err) throw err;
            
            res.send('Success');
        });
    }
    
    else {
       
       var newTodo = Todos({
           username: req.body.username,
           todo: req.body.todo,
           isDone: false,
           hasAttachment: false
       });
       newTodo.save(function(err) {
           if (err) throw err;
           res.send('Success');
       });
        
    }
    
});

todoRouter.delete('/todo/:id', function(req, res) {
    
    var idTodo = { _id: req.params.id };
    Todos.remove(idTodo, function(err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
});
    
});

module.exports = todoRouter;

