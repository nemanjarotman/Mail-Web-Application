import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {NgModel} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {UserService} from '../user.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: User;
  loading=false;


constructor(private _userService: UserService, private router:Router){}

ngOnInit() {
  this.user = {username:null, password:null, id:0, name: null, surname:null};
  this.fetchUsersFromServer();
}

public onRegisterClicked(): void{
  this.loading=true;
  alert("Zahtev za registraciju korisnika");
  this._userService.register(this.user.name,this.user.surname,this.user.username, this.user.password)
    .subscribe( data => {this.router.navigate(['/login']); },
              error => {
                 console.error("Failed to register!");
                  alert("fail register?Try again pls? HAXXXX");
                  this.loading=false;
            }
  );
}

public fetchUsersFromServer(): void{
  
}

}

