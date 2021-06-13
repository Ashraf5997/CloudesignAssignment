import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputFormComponent } from './task-input-form.component';

describe('TaskInputFormComponent', () => {
  let component: TaskInputFormComponent;
  let fixture: ComponentFixture<TaskInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
