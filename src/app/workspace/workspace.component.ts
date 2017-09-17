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
    total: number;
    phases: PhaseModel[];
    sliderValues: number[];
    sliderInputs: number[];

    constructor(public dialog: MdDialog, private workspaceService: WorkspaceService) {
        this.sliderValues = [];
        this.sliderInputs = [];
    }

    async ngOnInit() {
        this.phases = await this.workspaceService.getPhases();

        this.sliderValues = this.phases.map((phase) => phase.defaultValue);
        this.sliderInputs = this.sliderValues;
        this.computeTotal();
    }

    onChange(event, sliderId) {
        this.sliderValues[sliderId] = event.value;
        this.computeTotal();
    }

    onInput(event, sliderId) {
        this.sliderInputs[sliderId] = event.value;
    }

    computeTotal() {
        this.total = this.sliderValues.reduce((a, b) => a + b, 0);
    }

    openDialog(score): void {
        let dialogRef = this.dialog.open(DialogScoreComponent, {
            data: { score: score }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('the dialog was closed');
        })
    }

}
