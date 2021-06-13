
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


/* IMPORTING SERVICE */
import {TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-task-input-form',
  templateUrl: './task-input-form.component.html',
  styleUrls: ['./task-input-form.component.css']
})
export class TaskInputFormComponent implements OnInit {

  constructor(private taskService : TaskServiceService) {   
  }


   public count=0;
   public title="";
   public description ="";
   public status="Open";
   public ErrMsg =false;
   public SuccMsg =false;
   public processing=false;
   public receiveData :any;
   public taskId:any;
   public editMode=false;
   public saveMode=true;
   public updateMsg = false;


  ngOnInit(): void {
         this.taskService.receiver.subscribe(res=>{
         this.receiveData=res
         this.description=this.receiveData.taskTitle
         this.title=this.receiveData.taskDescription
         this.taskId=this.receiveData.taskId
         this.editMode= true;
         this.saveMode=false
       })
  }

  stop(){

  }
  startProcess(){
     const stop = setInterval(() => {
        this.count +=1;
        if( !this.processing){
          clearInterval(stop);
        }
      }, 50);
  }
  

  saveTask(){
    if(this.title != "" && this.description !=""){
      this.SuccMsg=false; 
      this.ErrMsg=false;
      this.processing=true;
      this.startProcess()

      let reqDataObj ={
        taskTitle:this.title,
        taskDescription:this.description,
        taskStatus:this.status
      }
        
        if(this.editMode){
          this.taskService.updateTask(this.taskId,reqDataObj).subscribe(response=>{

              this.updateMsg=true; 
              this.editMode= false;
              this.saveMode = true;
              this.clearVariables();

          }); 
          
        }else{
          this.taskService.createTask(reqDataObj).subscribe(response=>{
             this.updateMsg=false 
              this.SuccMsg=true; 
              this.clearVariables();

          }); 
        }
  
    }else
    {
      this.SuccMsg=false; 
      this.updateMsg=false;
      this.ErrMsg=true;
    }
  }


  clearVariables(){
    this.title="";
    this.description ="";
    this.count =0;
    this.processing= false;
    this.taskService.CWC_CRUD();
  }

}
