import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CustomMaterialModule} from './material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';

import { RouterModule } from '@angular/router';
import { NewEmailComponent } from './new-email/new-email.component';

// NASE SERVISE DEKLARISEMO unutar modula koji ih koristi
// nasa app nazalost ima samo ovaj app modul...
// tkao da su 'providers' deklaracije servisa dole
import {UserService} from './user.service';
import {MailService} from './mail.service';

// za AJAX...mora i u providers
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InboxComponent,
    OutboxComponent,
    NewEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'inbox', component: InboxComponent },
      {path: 'outbox', component: OutboxComponent },
      {path: 'new-mail', component: NewEmailComponent},
      {path: '**', redirectTo: 'inbox', pathMatch: 'full'}
  ], {useHash: true}),
  ],
  providers: [UserService, MailService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
