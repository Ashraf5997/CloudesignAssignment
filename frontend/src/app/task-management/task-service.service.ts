
import { Injectable } from '@angular/core';

/* IMPORT MODULE */
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs' ;



@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  

  constructor(private http : HttpClient) {
   
   }

                  //  ###############    MESSANGERS  AREA   #############


  //   TO SEND MESSAGE IN DIFFERENT COMPONENTS WHEN "CRUD OPERATIONS IS PERFORMED ON TASK"
  MSG_CRUD_ON_TASK = new Subject(); 

  //   TO SEND MESSAGE IN DIFFERENT COMPONENTS WHEN PAGE IS REFRESHED "
  MSG_PAGE_REFRESHED  = new Subject(); 

  //  TO SEND DATA ONE TO ANOTHER COMPONNETS 
  private sendToCom = new Subject<[]>();
  receiver=this.sendToCom.asObservable(); 




                //  ###############   FUNCTION  AREA   #############
                   

  //  TO SHARE DATA BETWEEN DIFFERENT COMPONENTS              
  shareData(data:any){
     this.sendToCom.next(data);
  }


  // FETCHING ALL TASK
  getAllTask(){
    let url ="http://localhost:9000/api/v1/tasks";
    return this.http.get(url);
  }

   // CREATEING TASK
   createTask(reqDataObj: { taskTitle: string; taskDescription: string; taskStatus: string; }){
    let url ="http://localhost:9000/api/v1/createTask";
    return this.http.post<any>(url,reqDataObj);
  }

  // DELETING TASK
  deleteTaskById(id:any){
    let url =`http://localhost:9000/api/v1/deleteTask/${id}`;
    return this.http.delete(url);
  }

   // UPDATE TASK STATUS
   updateTaskStatusById(taskId:any , reqDataObj:{ taskStatus :string}){
   
    let url =`http://localhost:9000/api/v1/updateStatus/${taskId}`;
    return this.http.put(url ,reqDataObj);
  }

  // UPDATE TASK 
  updateTask(taskId:any , reqDataObj:{ taskTitle :string;taskDescription:string;}){
   
    let url =`http://localhost:9000/api/v1/updateTask/${taskId}`;
    return this.http.put(url ,reqDataObj);
  }

  // GET  TASK BY STATUS
  getTaskByStatus(status:any){
    let url =`http://localhost:9000/api/v1/tasks/${status}`;
    return this.http.get(url);
  }




                    // ##################   COMMUNICATING AREA    ###################
  // =====> CWC = CommunicationWithComponent

  CWC_CRUD()    // FOR WHEN CRUD ON TASK I
  {
     this.MSG_CRUD_ON_TASK.next();
     console.group("CWC_CRUD IS CALLED")
  }

  CWC_PAGE_REFRESHED(){   // FOR WHEN PAGE IS REDRESHED
    this.MSG_PAGE_REFRESHED.next();
    console.group("CWC_PAGE_REFRESHED IS CALLED")

  }


}
/*
function shareDataToCom() {
  throw new Error('Function not implemented.');
}

function drugs(drugs: any, IDrug: any) {
  throw new Error('Function not implemented.');
}*/

