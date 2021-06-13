
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**------IMPORTING COMPONENTS ---------- */
import { TaskInputFormComponent } from './task-input-form/task-input-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { DatacardComponent } from './datacard/datacard.component';

// ---- importing Modules ----  //
import {FormsModule} from '@angular/forms';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import{HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    TaskInputFormComponent,
    TaskListComponent,
    HeaderComponent,
    DatacardComponent,
  
  ],
  imports: [
    CommonModule,
    TaskManagementRoutingModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    MatProgressBarModule
   
  ]
})
export class TaskManagementModule { }
