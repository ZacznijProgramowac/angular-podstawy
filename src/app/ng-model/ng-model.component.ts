import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {

inputModel = '';
inputProperty = '';
ownModel = '';
texAreaModel = 'Przykładowy tekst prosto z klasy komponentu';
}
