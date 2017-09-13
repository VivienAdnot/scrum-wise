import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MdListModule, MdSliderModule} from '@angular/material';
import { WorkspaceComponent } from './workspace/workspace.component';

import { WorkspaceService } from './workspace/workspace.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdListModule,
    MdSliderModule
  ],
  providers: [WorkspaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
