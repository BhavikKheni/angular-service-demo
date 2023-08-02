import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/service/api.service";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    public api: ApiService,
  ) { }

  
  getUser() {
    return this.api.get('/users')
  }
  getPost(param:any) {
    return this.api.get(param)
  }
  
}
