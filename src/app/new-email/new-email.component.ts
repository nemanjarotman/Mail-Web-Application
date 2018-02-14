import { Component, OnInit } from '@angular/core';
import { Mail } from '../model/mail.model';
import { MailService } from '../mail.service';
import { UserService } from '../user.service';
import { NgModel } from '@angular/forms'; 
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {

  mail: Mail;
  constructor(private mailService: MailService, private userService: UserService) {
    this.mail = {
        id:0,
        subject: null,
        content: null,
        sender:  {id:this.userService.getUserId(), username:null, password:null, name: null, surname:null},
        receiver:  { id:0, username:null, password:null, name: null, surname:null}
    }

   }

  ngOnInit() {
  }

  onSendMailClicked() {
    console.log("CALLING");
    this.mailService.sendMail(this.mail).subscribe();
  }

}
