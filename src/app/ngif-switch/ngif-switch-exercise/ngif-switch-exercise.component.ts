import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-switch-exercise',
  templateUrl: './ngif-switch-exercise.component.html',
  styleUrls: ['./ngif-switch-exercise.component.scss']
})
export class NgifSwitchExerciseComponent {

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  switch = false;
  textInput: string;
}
