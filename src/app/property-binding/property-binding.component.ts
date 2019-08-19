import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  imageURL = '/assets/angular.png';
  blackLogo = '/assets/angular_solidBlack.png';
  isDisabled = true;
  taskTitle = 'Zbindowany tekst';
  rowsNum = 20;
  colsNum = 200;
  someClassCss = 'square';
  htmlValue = 'To moja <b>pierwsza</b> aplikacja w <br> Angularze. <script>alert("Ale super!")</script>';
  isHighlight = true;

  constructor() {
  }

  ngOnInit() {
  }

}
