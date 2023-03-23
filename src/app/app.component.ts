import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }

  setTextColor(letterFromText: string, letterEntered: string): string {
    if (!letterEntered) {
      return 'pending';
    }
    return letterFromText === letterEntered ? 'correct' : 'incorect';
  }
}
