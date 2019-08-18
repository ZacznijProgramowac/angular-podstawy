import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  title = `PRZYKŁADY PIPE'ÓW`;
  someDate = Date.now();
  words = ['jeden', 'dwa', 'trzy', 'cztery'];
  num = 8.7237823462034243;
  season = 'zima';
  translate = {
    'zima': 'winter',
    'wiosna': 'spring',
    'jesień': 'autumn',
    'lato': 'summer'
  };
  price = 2.99;
}
