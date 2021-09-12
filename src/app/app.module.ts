import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { ServerInputComponent } from './task4/server-input/server-input.component';
import { ServerOutputComponent } from './task4/server-output/server-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    Task2Component,
    Task3Component,
    Task4Component,
    ServerInputComponent,
    ServerOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
