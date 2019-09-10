import { Component } from '@angular/core';

@Component({
  selector: 'app-question-mar-exercise',
  templateUrl: './question-mar-exercise.component.html',
  styleUrls: ['./question-mar-exercise.component.scss']
})
export class QuestionMarExerciseComponent {
  someObject: Foo;

  constructor() {
    setTimeout(() => {
      this.someObject = { text: 'Inicjalizacja z opóźnieniem' };
    }, 3000);
  }
}

interface Foo {
  text: string;
}
