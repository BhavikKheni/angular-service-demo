import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class Post implements OnInit {

  constructor(public userAPI: UserService, public route: ActivatedRoute,public toastr: ToastrService) { }
  posts:any = []
  comments:any = []
  isLoader = false
  isComment = false
  userId : string = ""
  ngOnInit(): void {
      this.route.params.subscribe((queryParams: any) => {
          this.userId = queryParams.id
        });
    this.getPost()
  }

  getPost() {
    if(this.userId){
        this.isLoader = true
        this.userAPI.getPost(`/users/${this.userId}/posts`).subscribe({
          next: (response) => {
            this.isLoader = false
            this.posts = response

          },
          error: (error) => {
            this.isLoader = false
            this.toastr.error(error);
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
  }
  getComment(post:any){
    if( this.comments.length === 0){
      this.isComment = true
      this.userAPI.getPost(`/posts/${post.id}/comments`).subscribe({
        next: (response) => {
         this.comments = response

        },
        error: (error) => {
          this.isComment = false
          console.log("Error",error)
          this.toastr.error(error);
          // treat error
        },
        complete: () => {
          this.isComment = false          // define on request complete logic
          // 'complete' is not the same as 'finalize'!!
          // this logic will not be executed if error is fired
        }
      })
    }
  }
}
