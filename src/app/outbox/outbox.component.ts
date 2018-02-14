import { Component, OnInit } from '@angular/core';
import { Mail } from '../model/mail.model';
import { MailService } from '../mail.service';

@Component({
  selector: 'outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {

  mails: Mail[];

  constructor(private _mailService: MailService) { }

  ngOnInit() {


    this._mailService.getOutboxEmails()
      .subscribe(emails => {
        this.mails = emails;
      }, error => console.error(error));

  }

}
