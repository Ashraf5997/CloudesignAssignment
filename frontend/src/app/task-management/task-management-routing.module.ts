import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ---- IMPORTING COMPONENTS ----
import { TaskInputFormComponent } from './task-input-form/task-input-form.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  {path:'taskform' ,component:TaskInputFormComponent},
  {path:'tasklist' ,component:TaskListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
