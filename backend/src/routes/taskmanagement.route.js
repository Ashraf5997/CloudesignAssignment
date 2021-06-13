

const express = require('express');
const router  = express.Router(); 

const TaskManagementController = require('../controllers/taskmanagement.controller');

//get all  taskList
router.get('/tasks',TaskManagementController.getAllTaskList);

//create new task
router.post('/createTask',TaskManagementController.createTask);

//get TodoList by userid
//router.get('/taskById/:id', TodoController.getTaskById);

//update task
router.put('/updateTask/:id',TaskManagementController.updateTask);

//delete task
router.delete('/deleteTask/:id',TaskManagementController.deleteTask);

// get TASK by status
router.get('/tasks/:status',TaskManagementController.tasks);

// get TASK by status
router.put('/updateStatus/:id',TaskManagementController.updateStatus);


module.exports = router;