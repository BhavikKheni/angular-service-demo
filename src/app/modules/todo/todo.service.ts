import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/service/api.service";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(
    public api: ApiService,
  ) { }

  
  getTodo() {
    return this.api.get('/todos')
  }
  
  saveTodo(body:any){
    return this.api.post('/todos',body)
  }
}
