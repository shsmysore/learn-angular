import {Component, Input, OnInit} from '@angular/core';
import {Server} from "./server.model";
import {BlueprintServer} from "./blueprint-server.model";

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  serverList : Server[] = []
  blueprintList : BlueprintServer[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onIncomingServer(server : Server) {
    this.serverList.push(server)
  }

  onIncomingBlueprint(blueprint : BlueprintServer) {
    this.blueprintList.push(blueprint)
  }
}
