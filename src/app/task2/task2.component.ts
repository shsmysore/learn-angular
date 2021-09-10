import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  username = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Username is : ' + this.username)
    this.username = ''
  }

  isSubmitDisabled() {
    return this.username === ''
  }
}
