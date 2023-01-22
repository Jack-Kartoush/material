import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          width: '0px',
          position: 'relative',
          right: '100%',
          // opacity:0 ,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          position: 'relative',
          right: '0',
          // opacity:1 ,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})

export class AppComponent {
  isOpen = true;

  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
