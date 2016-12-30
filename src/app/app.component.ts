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

  printDiv() {
    let printContents = document.getElementById('print-this').innerHTML;
    let originalContents = document.body.innerHTML;
    let popup;
    let styleTag = `
    <style type="text/css">@font-face{font-family:proxima-nova;src:url(https://use.typekit.net/af/265b7a/00000000000000003b9aec1d/27/l?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n9&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff2"),url(https://use.typekit.net/af/265b7a/00000000000000003b9aec1d/27/d?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n9&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff"),url(https://use.typekit.net/af/265b7a/00000000000000003b9aec1d/27/a?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n9&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("opentype");font-weight:900;font-style:normal;}@font-face{font-family:proxima-nova;src:url(https://use.typekit.net/af/723bd2/00000000000000003b9aec1f/27/l?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n7&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff2"),url(https://use.typekit.net/af/723bd2/00000000000000003b9aec1f/27/d?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n7&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff"),url(https://use.typekit.net/af/723bd2/00000000000000003b9aec1f/27/a?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n7&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("opentype");font-weight:700;font-style:normal;}@font-face{font-family:adelle;src:url(https://use.typekit.net/af/de9063/000000000000000000012b42/27/l?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=i7&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff2"),url(https://use.typekit.net/af/de9063/000000000000000000012b42/27/d?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=i7&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff"),url(https://use.typekit.net/af/de9063/000000000000000000012b42/27/a?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=i7&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("opentype");font-weight:700;font-style:italic;}@font-face{font-family:adelle;src:url(https://use.typekit.net/af/9f15fd/000000000000000000012b3b/27/l?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n3&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff2"),url(https://use.typekit.net/af/9f15fd/000000000000000000012b3b/27/d?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n3&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("woff"),url(https://use.typekit.net/af/9f15fd/000000000000000000012b3b/27/a?primer=7ceb210e49ade74e23101e10f006f110a0b6588c7c57777a6e3d98a38b749696&fvd=n3&token=1MThhP5l1O0ejpAro7ZFnw%3D%3D) format("opentype");font-weight:300;font-style:normal;}</style>
    <style type="text/css">/* You can add global styles to this file, and also import other style files */
/* Media Queries */
/* Global Color Variables */
/* Type */
/* 7,9 */
.tk-proxima-nova{font-family:"proxima-nova",sans-serif;}.tk-adelle{font-family:"adelle",serif;}
svg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; }

html {
  background: -webkit-radial-gradient(center, circle, #005db9, #00182f);
  background: radial-gradient(circle at center, #005db9, #00182f);
  color: white;
  font-size: 16px;
  height: 100%; }

body {
  margin: 0 auto; }

main {
  margin-top: 1rem;
  padding: 1rem; }
  @media (min-width: 400px) {
    main {
      margin: 0 auto;
      width: 85%; } }
  @media (min-width: 700px) {
    main {
      max-width: 595px;
      padding-top: 5rem; } }

button {
  font-family: "proxima-nova";
  font-weight: 700;
  font-style: normal;
  font-size: 1rem;
  background-color: #00A1E0;
  border-radius: 4px;
  border-style: none;
  color: white;
  letter-spacing: 1px;
  padding: .75rem 1rem;
  text-transform: uppercase;
  -webkit-transition: 100ms ease-in-out;
  transition: 100ms ease-in-out; }
  button:hover {
    background-color: #005db9; }

/* Footer */
footer {
  background-color: rgba(0, 13, 25, 0.65);
  width: 100%;
  bottom: 0;
  position: fixed; }
  @media (min-width: 550px) {
    footer {
      height: 90px; } }
  footer .text {
    font-family: "proxima-nova";
    font-weight: 900;
    font-style: normal;
    font-size: 1rem;
    color: #DBDBDB;
    float: left;
    letter-spacing: 2px;
    padding: 1.25rem 2rem;
    text-transform: uppercase; }
  footer .logo {
    display: inline-block;
    float: right;
    height: 85%;
    padding: .35rem .5rem;
    vertical-align: middle; }

    .heading-1 {
  font-family: "proxima-nova";
  font-weight: 900;
  font-style: normal;
  font-size: 2.35rem;
  border-bottom: 1px solid #00A1E0;
  border-top: 1px solid #00A1E0;
  line-height: 2.15rem;
  margin: .5rem 0;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase; }
  @media (min-width: 400px) {
    .heading-1 {
      font-size: 3rem;
      line-height: 2.5rem;
      margin-top: 1rem; } }
  @media (min-width: 500px) {
    .heading-1 {
      font-size: 3.75rem;
      line-height: 3.25rem; } }
  @media (min-width: 580px) {
    .heading-1 {
      font-size: 4.25rem;
      line-height: 3.75rem; } }
  @media (min-width: 675px) {
    .heading-1 {
      font-size: 5rem;
      line-height: 4.5rem;
      padding: 1.5rem; } }

.paragraph {
  font-family: "adelle";
  font-weight: 300;
  font-style: normal;
  font-size: 1.15rem;
  line-height: 1.75rem;
  padding: .5rem 0; }
  @media (min-width: 400px) {
    .paragraph {
      font-size: 1.35rem; } }
  .paragraph   .number {
    color: #00A1E0; }

.story {
  font-family: "adelle";
  font-weight: 300;
  font-style: normal;
  font-size: 1.15rem;
  line-height: 1.75rem;
  padding: 0; }
  @media (min-width: 400px) {
    .story {
      font-size: 1.35rem;
      line-height: 2rem; } }
  .story   .highlight {
    font-family: "adelle";
    font-weight: 700;
    font-style: italic;
    font-size: 1.15rem;
    border-bottom: 2px solid #00A1E0; }
    @media (min-width: 400px) {
      .story   .highlight {
        font-size: 1.35rem; } }

form {
  margin-top: 1rem; }

input {
  font-family: "adelle";
  font-weight: 300;
  font-style: normal;
  font-size: 1.5rem;
  border-radius: 4px;
  border-style: none;
  height: 50px;
  margin: 2rem 0;
  width: 100%; }
  input::-webkit-input-placeholder {
    padding-left: .5rem; }
  input::-moz-placeholder {
    padding-left: .5rem; }
  input:-ms-input-placeholder {
    padding-left: .5rem; }
  input::placeholder {
    padding-left: .5rem; }

.links {
  padding-top: 1.5rem; }

.link {
  font-family: "proxima-nova";
  font-weight: 700;
  font-style: normal;
  font-size: 1rem;
  background-color: #00A1E0;
  border-radius: 4px;
  border-style: none;
  color: white;
  display: inline-block;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  margin-right: .75rem;
  padding: .75rem 1rem;
  text-decoration: none;
  text-transform: uppercase; }

.progress-bar {
  height: 14px;
  background: rgba(255, 0, 0, 0.5);
  position: absolute;
  bottom: 90px;
  left: 0;
  right: 0;
  width: 100%; }
  .progress-bar   span {
    position: absolute;
    bottom: 0;
    background: purple;
    left: 0;
    right: 0;
    height: 14px; }
    .progress-bar   span.zero {
      width: calc( 1/14 * 100%); }
    .progress-bar   span.one {
      width: calc( 2/14 * 100%); }
    .progress-bar   span.two {
      width: calc( 3/14 * 100%); }
    .progress-bar   span.three {
      width: calc( 4/14 * 100%); }
    .progress-bar   span.four {
      width: calc( 5/14 * 100%); }
    .progress-bar   span.five {
      width: calc( 6/14 * 100%); }
    .progress-bar   span.six {
      width: calc( 7/14 * 100%); }
    .progress-bar   span.seven {
      width: calc( 8/14 * 100%); }
    .progress-bar   span.eight {
      width: calc( 9/14 * 100%); }
    .progress-bar   span.nine {
      width: calc( 10/14 * 100%); }
    .progress-bar   span.ten {
      width: calc( 11/14 * 100%); }
    .progress-bar   span.eleven {
      width: calc( 12/14 * 100%); }
    .progress-bar   span.twelve {
      width: calc( 13/14 * 100%); }
    .progress-bar   span.thirteen {
      width: calc( 14/14 * 100%); }
</style>
`;

    if (window) {
      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        popup = window.open('', '_blank', 
          'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,'
          +'location=no,status=no,titlebar=no');
        popup.window.focus();
        popup.document.write('<!DOCTYPE html><html><head>  '
          +    '</head><body onload="window.print()">' + styleTag + '<div class="reward-body">' 
          + printContents + '</div></html>');
        popup.onbeforeunload = function (event) {
          popup.close();
          return '.\n';
        };
        popup.onabort = function (event) {
          popup.document.close();
          popup.close();
        }
      } else {
        popup = window.open('', '_blank', 'width=800,height=600');
        popup.document.open();
        popup.document.write('<html><head>'+
          +'</head><body onload="window.print()">' + 
          styleTag + printContents + '</html>');
        popup.document.close();
      }
      popup.document.close();
    }
    return true;
  }

}
