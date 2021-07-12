import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Goals';
  goal = 'Watch Finding Nemo';
  goals:any;

  constructor(){
    this.goals = ["swim", "dance", "code"];
  }

}
