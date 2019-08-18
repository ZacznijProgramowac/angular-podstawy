import { Component } from '@angular/core';

@Component({
  selector: 'app-question-mark',
  templateUrl: './question-mark.component.html',
  styleUrls: ['./question-mark.component.scss']
})
export class QuestionMarkComponent {

  something: any;

  someObject = {
    exist: 'To istnieje',
    waiting: null,
  };

  constructor() {
    setTimeout(() => {
      this.someObject.waiting = { text: 'Inicjalizacja z opóźnieniem' };
    }, 3000);
  }
}
