import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoList } from './ListTodo/todo-list.component';
import { AddTodo } from './AddTodo/add-todo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: TodoList,
  },
];

@NgModule({
  declarations: [
    TodoList,
    AddTodo
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class TodoModule { }
