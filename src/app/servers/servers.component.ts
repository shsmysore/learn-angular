import { Component, OnInit } from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isServerDisabled = true
  serverCreationStatus = 'No server was created'
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.isServerDisabled = false
    }, 2000)
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreationStatus = "Server was created"
  }

  onServerText(event: KeyboardEvent) {
    this.serverName = (event.target as HTMLInputElement).value
  }
}
