import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Mail } from './model/mail.model';
import { UserService } from './user.service';

@Injectable()
export class MailService {

  private _mailApiUrl = 'http://localhost:8080/jeeRestProject/api/mail';
  //  /api/user



  constructor(private _http: HttpClient, private _userService: UserService) { 

  }

  getInboxEmails(): Observable<Mail[]> {
      // fetch logged in user ID from UserService
      let receiverId: number = this._userService.getUserId();
      let inboxUrl = this._mailApiUrl + "/receiver/" + receiverId;

      return this._http.get<Mail[]>(inboxUrl)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  getOutboxEmails(): Observable<Mail[]> {
      // fetch logged in user ID from UserService
      let senderId: number = this._userService.getUserId();
      let outboxUrl = this._mailApiUrl + "/sender/" + senderId;

      return this._http.get<Mail[]>(outboxUrl)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          .catch(this.handleError);
}

sendMail(mail: Mail): Observable<any> {

    return this._http.post(this._mailApiUrl, mail)
    .do(data => console.log('All: ' + JSON.stringify(data)))
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


