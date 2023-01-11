import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [''];
  task = '';
addTask() {
  
    this.tasks.push(this.task)
    console.log("task", this.task)
    return;
}
}
