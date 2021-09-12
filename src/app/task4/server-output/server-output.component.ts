import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../server.model";

@Component({
  selector: 'app-server-output',
  templateUrl: './server-output.component.html',
  styleUrls: ['./server-output.component.css']
})
export class ServerOutputComponent implements OnInit {
  @Input('server') server : Server
  serverContent = 'A test server content'

  constructor() { }

  ngOnInit(): void {
  }

}
