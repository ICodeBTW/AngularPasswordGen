// Handles Important events

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  onButtonClick() {
    this.password = 'Password';
    console.log(this.useLetters,this.useNumbers,this.useSymbols)
  }

  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }
  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }
  onUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }

  getPassword() {
    return this.password;
  }
}
