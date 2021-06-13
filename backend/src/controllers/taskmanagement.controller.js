
//const Employee = require('../models/employee.model');
const TaskModel = require('../models/taskmanagement.model');
//const TodoModel  =  require('../models/todo.model');

// get all tasklist 
exports.getAllTaskList = (req , res)=>{
   // res.send("Here is list of data");
    TaskModel.getAllTaskList((err, taskList)=>{

            if(err){
                res.send(err);
            }

            if(taskList == "")
            {  
                console.log('Empty Database ' , taskList);
                res.json({status: 404 , message :'Empty Database', })   
            }

            if(taskList){
               console.log('taskListzzz' , taskList);
                res.send(taskList);
                //res.json({status: 200 , taskData :taskList, })   

            }
    })
}


//  get all  Task  by status
exports.tasks = async(req , res)=>{
   
              TaskModel.tasks(req.params.status, (err , task)=>{
                   if(err){
                      res.send(err);
                   }
                   else{
                      res.send(task)
                       
                   }
             })
      
}


//  get all open  Task 
exports.updateStatus =(req , res )=>{
    //  const status  = new  TaskModel(req.body);
    if(req.params.id === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
         TaskModel.updateStatus(req.params.id, req.body ,(err , data)=>{
         if(err){
            res.send(err);
         }
         else{
            if(data ==""){
                 res.json({status : 500 , message : ' Server Error' });  
            }else{
              
                res.json({status: 200, Data:data})   

                }
           } 
        });
    }
} 




// create task l
exports.createTask =(req , res )=>{
    const taskReqData  = new  TaskModel(req.body);
    console.log( "taskData" , taskReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        TaskModel.createTask(taskReqData , (err , task)=>{
            if(err){
                console.log("Error : ",err);
                res.send(err);
            }if(task){
                 console.log("Task  ceated succesfully");
                 res.json({success : 200 , message : ' Task created successfully ' , taskId: task.insertId});
            }    
        });
   }
}


// Update Task 
exports.updateTask =(req , res )=>{
    const  taskReqData  = new  TaskModel(req.body);
    console.log("task update :", taskReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
         TaskModel.updateTask(req.params.id , taskReqData , (err , task)=>{
         if(err){
            res.send(err);
         }
         else{
            if(task ==""){
                 res.json({success : 404 , message : ' Task not found ' , taskId: task.insertId});  
            }else{
                res.json({success : 200 , message : 'Task updated successfully ' , taskId: task.insertId});  
                }
           } 
        });
    }
} 

// delete Task
exports.deleteTask =(req , res )=>{
    const  taskReqData = new TaskModel(req.body);
    console.log( "TaskReqData delete" , taskReqData);
      
        TaskModel.deleteTask(req.params.id  , (err , task)=>{
            if(err){
              
                res.json({success : 500 , message : ' Error while deleting task ' , taskId: task.insertId});   
            }else{
           
            res.json({ success : 200 , message : ' Task deleted successfully' , taskId : task.insertId})
            }
        });
} 


