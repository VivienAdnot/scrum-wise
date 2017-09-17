import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DialogScoreComponent } from '../dialog-score/dialog-score.component';

import { ScrumPokerService } from '../scrum-poker.service';
import { PhaseModel } from '../models/phase.model';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
    phases: PhaseModel[];

    sliderValues: number[];
    sliderInputs: number[];

    sliderSum: number;
    pokerScore: number;

    constructor(
        private router: Router,
        public dialog: MdDialog,
        private scrumPokerService: ScrumPokerService) {
        this.sliderValues = [];
        this.sliderInputs = [];
    }

    async ngOnInit() {
        this.phases = await this.scrumPokerService.getPhases();

        this.sliderValues = this.phases.map((phase) => phase.defaultValue);
        this.sliderInputs = this.sliderValues;
        this.updateScore();
    }

    onChange(event, sliderId) {
        this.sliderValues[sliderId] = event.value;
        this.updateScore();
    }

    onInput(event, sliderId) {
        this.sliderInputs[sliderId] = event.value;
    }

    updateScore() {
        this.sliderSum = this.sliderValues.reduce((a, b) => a + b, 0);
        this.pokerScore = this.scrumPokerService.getPokerScore(this.sliderSum);
    }

    openDialog(score: number): void {
        let dialogRef = this.dialog.open(DialogScoreComponent, {
            data: { score: score }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['/']);
        })
    }
}
