import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './ListUser/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Post } from './Post/post.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: UserList,
  },
  {
    path: ':id', component: Post,
  },
//   { path: 'new', component: AddUserComponent },
];

@NgModule({
  declarations: [
    UserList,
    Post
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
