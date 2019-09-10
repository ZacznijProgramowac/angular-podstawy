import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-exercise',
  templateUrl: './pipe-exercise.component.html',
  styleUrls: ['./pipe-exercise.component.scss']
})
export class PipeExerciseComponent {
  titleBig = 'Wyświetl tylko dużymi';
  titleSmall = 'WYŚWIETL TYLKO MAŁYMI';
  pi = '3.14159265359';
  money = 19.9999;

  weekdays = {
    'poniedziałek': 'Monday',
    'wtorek': 'Tuesday',
    'środa': 'Wednesday',
    'czwartek': 'Thursday',
    'piątek': 'Friday',
    'sobota': 'Saturday',
    'niedziela': 'Sunday',
  };

  deepObject = {
    level1: {
      info: 'To level 1',
      level2: {
        info: 'To level 2',
        level3: {
          info: 'To level 3'
        }
      }
    }
  };
  today = Date.now();

}
