import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    public http: HttpClient,
    public router: Router,
    private toastr: ToastrService
  ) { }

  get(endpoint: string, params?: any, reqOpts?: any) {
    const headers = this.getHeaders();
    return this.http.get(this.url + endpoint, { headers: headers, observe: 'response', params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }


//   post(endpoint: string, body: any, contentType?: any, params?: any) {
//     const headers = this.getHeaders(contentType);
//     const api = this.url + endpoint;
//     return this.http.post(api, body, { headers: headers, observe: 'response', params })
//       .pipe(
//         map(this.extractData),
//         catchError(this.handleError)
//       );
//   }

//   put(endpoint: string, body: any, params?: any, contentType?: any) {
//     const headers = this.getHeaders(contentType);
//     return this.http.put(this.url + endpoint, body, { headers: headers, observe: 'response', params })
//       .pipe(
//         map(this.extractData),
//         catchError(this.handleError)
//       );
//   }
  
  getHeaders(contentType?: any) {

    let headers = new HttpHeaders();

    if (!contentType) {
      headers = headers.set('Content-Type', 'application/json')
    }

   
    return headers;
  }


  extractData = (response: HttpResponse<any>) => {
    return response.body || response.status;
  };

  handleError = (errorResponse: HttpErrorResponse) => {
    console.log(errorResponse);
    if (errorResponse.status === 401) {
      this.goToSessionExpired();
    } else if (errorResponse.status === 0) {
      this.showError('You have not an active internet Connection or Server not Responding')
    } else if (errorResponse.status === 403) {
      this.goToAccessDenied();
    }
    else if (errorResponse?.error?.message == "Camera image is not uploaded") {

    } else {
      this.showError((errorResponse?.error?.error) || errorResponse?.error?.message || errorResponse?.error?.status || "Something went wrong");
    }
    return throwError(errorResponse);
  };

  async showError(message:string) {
    this.toastr.error(message)
  }


  goToSessionExpired() {
    localStorage.clear();
    sessionStorage.clear();
    this.redirectTo('/');
  }

  redirectTo(...route:any): void {
    this.router.navigate(route);
  }

  goToAccessDenied() {
    
  }

}
