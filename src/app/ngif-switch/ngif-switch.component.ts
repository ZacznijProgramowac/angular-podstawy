import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-switch',
  templateUrl: './ngif-switch.component.html',
  styleUrls: ['./ngif-switch.component.scss']
})
export class NgifSwitchComponent implements OnInit {
  day = new Date().getDay();

  constructor() {
  }

  ngOnInit() {
  }

}
