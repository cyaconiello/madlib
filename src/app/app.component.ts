import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggleForm: boolean;
  width: any;
  counter: number;
  adjOne: string;
  pnounTwo: string;
  pnounThree: string;
  verbFour: string;
  nounFive: string;
  verbSix: string;
  verbSeven: string;
  pnounEight: string;
  adjNine: string;
  adjTen: string;
  pnounEleven: string;
  pnounTwelve: string;
  occupationThirteen: string;
  adjFourteen: string;

  constructor() { }

  ngOnInit() {
    this.toggleForm = false;
    this.counter = 0;
  }

  incrementCounter() {
    this.counter++;
  }

  setClasses() {
    let classes = {
      'zero': (this.counter == 0),
      'one': (this.counter == 1),
      'two': (this.counter == 2),
      'three': (this.counter == 3),
      'four': (this.counter == 4),
      'five': (this.counter == 5),
      'six': (this.counter == 6),
      'seven': (this.counter == 7),
      'eight': (this.counter == 8),
      'nine': (this.counter == 9),
      'ten': (this.counter == 10),
      'eleven': (this.counter == 11),
      'twelve': (this.counter == 12),
      'thirteen': (this.counter == 13)
    };
    return classes;
  }

  reset() {
    this.toggleForm = false;
    this.counter = 0;
    this.adjOne = '';
    this.pnounTwo = '';
    this.pnounThree = '';
    this.verbFour = '';
    this.nounFive = '';
    this.verbSix = '';
    this.verbSeven = '';
    this.pnounEight = '';
    this.adjNine = '';
    this.adjTen = '';
    this.pnounEleven = '';
    this.pnounTwelve = '';
    this.occupationThirteen = '';
    this.adjFourteen = '';
  }
}
