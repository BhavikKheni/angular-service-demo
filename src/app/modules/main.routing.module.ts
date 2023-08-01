import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { TodoList } from "./todo/ListTodo/todo-list.component";
import { UserList } from "./user/ListUser/user-list.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "todo",
        component: TodoList
      },
      {
        path: "user",
        component: UserList
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class MainRoutingModule { }
