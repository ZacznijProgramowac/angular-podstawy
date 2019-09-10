import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-switch',
  templateUrl: './ngif-switch.component.html',
  styleUrls: ['./ngif-switch.component.scss']
})
export class NgifSwitchComponent {
  day = new Date().getDay();
}
