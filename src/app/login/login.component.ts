import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { NgModel } from '@angular/forms'; 
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  

  // User Servis za logovanje
  // Router za preusmeravanje korisnika na inbox rutu

  constructor(private _userService: UserService, private router: Router) { }
  
  /**
   * RDY 2 go
   */
  ngOnInit() {
    this.user = {username:null, password:null, id:0, name: null, surname:null};
    this.fetchUsersFromServer();
  }

  public onLoginClicked(): void {
    alert("Saljemo bekendu zahtev za logovanje:");
    // ovo ispod nisu obicni navodnici vec backquote ````
  //  alert(`ime: ${this.user.username} prezime: ${this.user.password}`);
    this._userService.login(this.user.username, this.user.password)
    .subscribe( data => {this.router.navigate(['/inbox']); },
              error => {
                 console.error("Failed to login!");
                  alert("fail login?Try again pls? HAXXXX");
            }
  );

  }

  public fetchUsersFromServer() : void {
    
  }


}
