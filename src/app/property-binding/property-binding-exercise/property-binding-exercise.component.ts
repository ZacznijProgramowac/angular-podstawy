import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-exercise',
  templateUrl: './property-binding-exercise.component.html',
  styleUrls: ['./property-binding-exercise.component.scss']
})
export class PropertyBindingExerciseComponent {
  logo = '/assets/angular.png';
  blackLogo = '/assets/angular_solidBlack.png';
  text = 'Zadanie wykonane!';
  htmlText = '<h2>Anglar jest fajny</h2><blockquote>Ale trzeba się dużo uczyć</blockquote>';
  isDisabled = true;
  changeColor = false;
}
