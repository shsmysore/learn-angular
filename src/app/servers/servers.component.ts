import { Component, OnInit } from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isServerDisabled = true
  shouldDisplayStatusMessage = false
  serverCreationStatus = 'No server was created'
  serverName = 'Server Name'
  serverList = ['Server1', 'Server2']

  constructor() {
    setTimeout(() => {
      this.isServerDisabled = false
    }, 2000)
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverList.push(this.serverName)
    this.serverCreationStatus = "Server was created"
    this.shouldDisplayStatusMessage = true
  }

  /*onServerText(event: KeyboardEvent) {
    this.serverName = (event.target as HTMLInputElement).value
  }*/
}
