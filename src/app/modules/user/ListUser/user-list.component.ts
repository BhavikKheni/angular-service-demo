import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserList implements OnInit {

  constructor(public userAPI: UserService, public router: Router,) { }
  users = []
  isLoader = false
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.isLoader = true
    this.userAPI.getUser().subscribe({
      next: (response) => {
        this.isLoader = false
        this.users = response
      },
      error: (error) => {
        this.isLoader = false
        // treat error
      },
      complete: () => {
        this.isLoader = false
        // define on request complete logic
        // 'complete' is not the same as 'finalize'!!
        // this logic will not be executed if error is fired
      }
    })
  }
  viewProfile(user:any){
    this.router.navigate([`user/${user.id}`]);
  }
}
