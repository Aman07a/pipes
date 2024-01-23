import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';
  name = '';
  date = '';

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }
}
