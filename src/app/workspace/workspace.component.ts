import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { WorkspaceService } from './workspace.service';
import { PhaseModel } from '../models/phase.model';
import { DialogScoreComponent } from '../dialog-score/dialog-score.component';

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

    constructor(public dialog: MdDialog, private workspaceService: WorkspaceService) {
        this.sliderValues = [];
        this.sliderInputs = [];
    }

    async ngOnInit() {
        this.phases = await this.workspaceService.getPhases();

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
        this.pokerScore = this.workspaceService.getPokerScore(this.sliderSum);
    }

    openDialog(score: number): void {
        let dialogRef = this.dialog.open(DialogScoreComponent, {
            data: { score: score }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('the dialog was closed');
        })
    }

}
