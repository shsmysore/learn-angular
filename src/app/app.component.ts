import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-first app!!';
  name;
  isServerDisabled = true
  constructor() {
    setTimeout(() => {
      this.isServerDisabled = false
    }, 2000)
  }
}
