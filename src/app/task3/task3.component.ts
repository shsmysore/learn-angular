import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  shouldDisplayPassword = false
  buttonClicks = []

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttonClicks.push(new Date())
    this.shouldDisplayPassword = !this.shouldDisplayPassword
  }

  getLogBgColor(currentLogItemIndex : number) {
    return currentLogItemIndex > 4 ? 'blue' : 'white'
  }
}
