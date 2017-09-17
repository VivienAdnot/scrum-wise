import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DialogScoreComponent } from '../dialog-score/dialog-score.component';

import { ScrumPokerService } from '../scrum-poker.service';

@Component({
  selector: 'poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.css']
})
export class PokerListComponent implements OnInit {
    pokerValues: number[];

    constructor(
        public dialog: MdDialog,
        private pokerService: ScrumPokerService) { }

    ngOnInit() {
        this.pokerValues = this.pokerService.getPokerValues();
    }

    openDialog(score: number): void {
        let dialogRef = this.dialog.open(DialogScoreComponent, {
            data: { score: score }
        });
    }
}
