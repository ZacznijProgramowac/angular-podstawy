import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  inputText = '';
  mouse = '';
  enterList = [];
  isWheel = false;
  focus = '';

  onClickButton() {
    alert('hahahaha :-)')
  }

  onMouseMove(event: MouseEvent) {
    this.mouse = event.clientX + ' - ' + event.clientY
  }

  onEnter(value: string) {
    this.enterList.push(value)
  }

}
