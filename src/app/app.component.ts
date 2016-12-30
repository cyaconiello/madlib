import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggleForm: boolean;
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

  ngOnInit() {
    this.toggleForm = false;
    this.counter = 0;
  }

  incrementCounter() {
    this.counter++;
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
