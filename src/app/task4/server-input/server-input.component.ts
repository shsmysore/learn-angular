import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Server} from "../server.model";
import {BlueprintServer} from "../blueprint-server.model";

@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrls: ['./server-input.component.css']
})
export class ServerInputComponent implements OnInit {
  inputServerName = ''
  inputServerContent = ''

  @Output() newServer = new EventEmitter<Server>()
  @Output() newBlueprint =  new EventEmitter<BlueprintServer>()

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdd() {
    this.newServer.emit(new Server(
      this.inputServerName,
      this.inputServerContent
    ))
  }

  onBlueprintAdd() {
    this.newBlueprint.emit(new BlueprintServer(
      this.inputServerName,
      this.inputServerContent
    ))
  }
}
