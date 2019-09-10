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

  onMouseMove(clientX: number, clientY: number ) {
    this.mouse = clientX + ' - ' + clientY
  }

  onEnter(value: string) {
    this.enterList.push(value)
  }

}
