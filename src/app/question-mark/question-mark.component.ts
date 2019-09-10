import { Component } from '@angular/core';

@Component({
  selector: 'app-question-mark',
  templateUrl: './question-mark.component.html',
  styleUrls: ['./question-mark.component.scss']
})
export class QuestionMarkComponent {
  dog: Animal;


  constructor() {
    setTimeout(() => {
      this.dog = { name: 'Pies dostał imię Reksio' };
    }, 3000);
  }
}
interface Animal{
  name: string;
}
