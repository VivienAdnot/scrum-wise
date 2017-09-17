import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MdListModule, MdSliderModule, MdDialogModule } from '@angular/material';
import { WorkspaceComponent } from './workspace/workspace.component';

import { WorkspaceService } from './workspace/workspace.service';
import { DialogScoreComponent } from './dialog-score/dialog-score.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    DialogScoreComponent
  ],
  entryComponents: [
    DialogScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdListModule,
    MdSliderModule,
    MdDialogModule
  ],
  providers: [WorkspaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
