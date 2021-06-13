

import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService : TaskServiceService) {
     this.countTotalTask()
  

  }

   public noTotalTask=0;
   public isFormVisible = false;

   countTotalTask(){

        this.taskService.getAllTask().subscribe(data=>{
        this.noTotalTask = Object.keys(data).length;
        this.taskService.CWC_PAGE_REFRESHED();
          
    });
    
  }

  displayForm(){
    this.isFormVisible= ! this.isFormVisible;
  }

  ngOnInit(): void { 
    this.taskService.MSG_CRUD_ON_TASK.subscribe(res=>{
         console.log(" MSG FROM CWC : new task is created.");
        this.countTotalTask();
 
    })
  }
  

}
