import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {
  title = 'Przykłady interpolacji';
  show = false;
  objectProp = { name: 'Test test tes' };

  constructor() {
    // Dodaję asynchorniczne zdarzenie i zmuszam angulara do uruchamiania Change Detection
    window.addEventListener('mousemove', () => {
    });
  }

  getInfo() {
    return 'Wyświetlone z metody';
  }

  get info() {
    return 'Wyświetlone przez getter';
  }

  getNumber() {
    console.log('Change Detection uruchamia się cały czas');
    return 2;
  }

  showObject() {
    return {
      name: 'Jhon',
      age: 23,
    };
  }
}
