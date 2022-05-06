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
  length: number = 0;

  onButtonClick() {

    const numbers= "123456789"
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    const symbols = '!@#$%^&*()';
    let validChars = ""
    if (this.useLetters){
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols){
      validChars += symbols;
    }
    let generatedPassword  = "";

    for (let i = 0 ; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]
    }

    this.password =  generatedPassword;
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

  onChangeLength(eventValue: Event){
    let value = (eventValue.target as HTMLInputElement).value
    const parsedNumber = parseInt(value)
    if (!isNaN(parsedNumber)) {
      this.length = parsedNumber
     }
  }


  getPassword() {
    return this.password;
  }
}
