import {
    Component,
    OnInit,
} from "@angular/core";
import { TodoService } from '../todo.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo-component.css']
})
export class AddTodo implements OnInit {
    isSaveUser = false;
    submitted = false
    todoForm: FormGroup;
    constructor(public todoService: TodoService,
        private formBuilder: FormBuilder,
        public activeModal: NgbActiveModal,
        public toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.todoForm = this.formBuilder.group({
            title: [null, [Validators.required]],
            completed: [false],
        });
    }

    get getControl() { return this.todoForm.controls; }

    onSubmit(event: any) {
        event.preventDefault();
        this.submitted = true;
        const value = this.todoForm.value
        if (this.todoForm.invalid) {
            return;
        } else {
            this.submitted = false;
            this.isSaveUser = true;
            this.todoService.saveTodo({ body: value }).subscribe({
                next: (response) => {
                    this.activeModal.close('Close click')
                    this.toastr.success('Success');
                  },
                  error: (error) => {
                    this.toastr.error(error);
                    // treat error
                  },
                  complete: () => {
                    // define on request complete logic
                    // 'complete' is not the same as 'finalize'!!
                    // this logic will not be executed if error is fired
                  }
            })
        }
    }
}
