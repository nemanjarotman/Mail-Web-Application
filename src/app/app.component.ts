import { Component } from '@angular/core';

@Component({
  selector: 'foka',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Najbolji shiet ever';
  user = {
    pro: true,
    igraIgrice: false
  };
}
