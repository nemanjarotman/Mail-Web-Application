import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {LoginDTO} from './model/dto/login.dto';
import {RegisterDTO} from './model/dto/register.dto';

@Injectable()
export class UserService {
  private _userApiUrl = 'http://localhost:8080/jeeRestProject/api/user';

  // posto je UserService singlton
  // odavde cemo moci da distribuiramo sve podatke kroz apliakaciju
  // odnosno userId...
  private _userId = 0; 
  
  constructor(private _http: HttpClient) { }

  public getUserId(): number {
    return this._userId;
  }

  public register(username:string, password:string) : Observable<RegisterDTO>{
    let dto: RegisterDTO  = {
      name: name,
      surname: surname,
      username: username,
      password: password,
      id: 0
    };
    let url = this._userApiUrl + "/register";
    return this._http.post<RegisterDTO>(url, dto)
         .do(data => this._userId = data.id)
        .catch(this.handleError);
  }

  public login(username: string, password: string) : Observable<LoginDTO> {
    let dto: LoginDTO  = {
      username: username,
      password: password,
      id: 0
    };
    let url = this._userApiUrl + "/login";
    // gadjaj server
    // u odgovoru ce biti userId ako smo se uspesno ulogovali
    // zapamticemo ga u servisu
    return this._http.post<LoginDTO>(url, dto)
         .do(data => this._userId = data.id)
        .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}


}
