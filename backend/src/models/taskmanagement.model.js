
var      dbConn = require('../../config/db.config');

  var taskList = function(task){

    this.taskId            =   task.taskId;
    this.taskTitle         =   task.taskTitle;
    this.taskDescription   =   task.taskDescription
    this.taskCreatedOn     =   new Date();
    this.taskStatus        =   task.taskStatus
   
  }

// get all task
 taskList.getAllTaskList = (result)=>{
    dbConn.query("SELECT * FROM taskmanagement" , (err , res )=>{
    if(err)
    {
        console.log("error while fetching  all employeedata");
        result(null , err);
    }
    else{
        console.log("allEmployees fetched successfullyzzz");
        result(null , res);
    //  res.json({ success: 200,taskData:res})  ; 
       // result.send(200).send({success : 200, data : res});

       }
  })
 }

 // 
 taskList.tasks = ( status,result)=>{
   dbConn.query(  "SELECT * FROM  taskmanagement WHERE taskStatus =?",[status] ,(err,res)=>{
    if(err)
    {
        console.log("error while fetching  status task data");
        result(null , err);
    }
    else{
        console.log("all  task with status fetched successfully");
        result( null , res);  
       }
  })
 }

// create Task
taskList.createTask = (taskData , result) =>
{
  dbConn.query('INSERT INTO taskmanagement SET?' , taskData , (err , res)=>{
      if(err)
      {
        console.log("Error while inserting data:",taskData);
        //result({success : 400 , message : 'This Email already exist '})
        result("Error try later")
      }else
      {

          console.log("Task created successfully");
          result( res);
        //  result.json({success:200 ,message:'' })
      }
  })
}

// update Task
taskList.updateTask = (taskId , taskData , result )=>{
  dbConn.query(  "UPDATE taskmanagement SET  taskDescription=?, taskTitle=? WHERE taskId =?", [taskData.taskDescription,taskData.taskTitle , taskId] ,(err,res)=>{
     if(err)
     {
         console.log("Error while updating task");
         result(null , err);
     }
     else{
         console.log("Task updated  successfully");
         result(null , res);
     }
  })
}

// update Task status
taskList.updateStatus = (taskId , reqbody, result )=>{
  dbConn.query(  "UPDATE taskmanagement SET taskStatus =?  WHERE taskId =?", [reqbody.taskStatus, taskId] ,(err,res)=>{
     if(err)
     {
         console.log("Error while updating task Status");
         result(null , err);
     }
     else{
         console.log("Task Status updated  successfully" );
         result(null , res);
     }
  })
}

// delete Task
taskList.deleteTask = (taskId , result )=>{
    dbConn.query(  "DELETE  FROM  taskmanagement WHERE taskId =?",[taskId] ,(err,res)=>{
       if(err)
       {
           console.log("Error while deleting task");
           result(null , err);
       }
       else{
           console.log("Task deleted successfully");
           result(null , res);
       }
    })
  }



module.exports= taskList;