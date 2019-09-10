import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-exercise',
  templateUrl: './ng-for-exercise.component.html',
  styleUrls: ['./ng-for-exercise.component.scss']
})
export class NgForExerciseComponent {
  frameworks = [
    'Angular',
    'React',
    'Vue',
    'Ember',
    'Backbone',
    'Express',
    'Django',
    'Rails',
    'Laravel',
    'Spring',
  ];

  cars = [
    {
      mark: 'Opel',
      model: 'Corsa',
    },
    {
      mark: 'Nissan',
      model: 'Juke',
    },
    {
      mark: 'Fiat',
      model: 'Tipo',
    },
    {
      mark: 'Skoda',
      model: 'Oktavia',
    }
  ];

  carsObj = {
    'Opel': 'Corsa',
    'Nissan': 'Juke',
    'Fiat': 'Tipo',
    'Skoda': 'Oktavia',
  };

}
