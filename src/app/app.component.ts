import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggleForm: boolean;
  counter: number;
  firstName: string;
  lastName: string;

  ngOnInit() {
    this.toggleForm = false;
    this.counter = 0;
    this.firstName = '';
    this.lastName = '';
  }

  incrementCounter() {
    this.counter++;
  }
}
