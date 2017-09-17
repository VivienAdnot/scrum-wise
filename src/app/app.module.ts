import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdListModule, MdGridListModule, MdSliderModule, MdDialogModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DialogScoreComponent } from './dialog-score/dialog-score.component';
import { PokerListComponent } from './poker-list/poker-list.component';

import { ScrumPokerService } from './scrum-poker.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    DialogScoreComponent,
    PokerListComponent
  ],
  entryComponents: [
    DialogScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MdListModule,
    MdGridListModule,
    MdSliderModule,
    MdDialogModule,
    MdToolbarModule,
    MdButtonModule
  ],
  providers: [ScrumPokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
