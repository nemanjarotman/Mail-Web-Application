import { Component, OnInit } from '@angular/core';
import { Mail } from '../model/mail.model';
import { MailService } from '../mail.service';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  mails: Mail[];

  constructor(private _mailService: MailService) { }

  ngOnInit() {
    // pre smo zakucavali

    // sada ko ljudi dovlacimo sa servera aktuelne podatke

    // let mail1:Mail = {subject: "Test1", sender: "Neki sender", id:0};
    // let mail2:Mail = {subject: "Test 222", sender: "Kekislav", id:1};

    // this.mails = [ mail1, mail2];


    this._mailService.getInboxEmails()
      .subscribe(emails => {
        this.mails = emails;
      }, error => console.error(error));
  }


}
