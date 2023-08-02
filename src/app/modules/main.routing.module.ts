import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "mytodo",
        loadChildren: () =>
          import("./todo/todo.module").then((m) => m.TodoModule),
      },
      {
        path: "user",
        loadChildren: () =>
          import("./user/user.module").then((m) => m.UserModule),
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class MainRoutingModule { }
