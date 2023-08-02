import {
  Component,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import { TodoService } from '../todo.service';
import { AddTodo } from "../AddTodo/add-todo.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoList implements OnInit {
  isSaveUser = false;
  submitted = false

  constructor(public todoService: TodoService,
    private modalService: NgbModal,
    public toastr: ToastrService

  ) { }
  showLoading = false
  todos: any = []
  ngOnInit(): void {
    this.getTodo()
  }

  getTodo() {
    this.showLoading = true
    this.todoService.getTodo().subscribe({
      next: (response) => {
        this.showLoading = false
        this.todos = response
      },
      error: (error) => {
        this.showLoading = false
        
        // treat error
      },
      complete: () => {
        this.showLoading = false
        // define on request complete logic
        // 'complete' is not the same as 'finalize'!!
        // this logic will not be executed if error is fired
      }
    })
  }
  addTodo() {
    const modalRef = this.modalService.open(AddTodo);

    modalRef.result.then((result: any) => {
      console.log(result);
    }).catch((error: any) => {
      console.log(error);
    });
  }

}
