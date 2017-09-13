import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from './workspace.service';
import { PhaseModel } from '../models/phase.model';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
    total: number;
    phases: PhaseModel[];
    sliderValues: number[];

    constructor(private workspaceService: WorkspaceService) {
        this.sliderValues = [];
    }

    async ngOnInit() {
        this.phases = await this.workspaceService.getPhases();

        this.sliderValues = this.phases.map((phase) => phase.defaultValue);
        this.computeTotal();
    }

    onChange(event, id) {
        this.sliderValues[id] = event.value;
        this.computeTotal();
    }

    computeTotal() {
        this.total = this.sliderValues.reduce((a, b) => a + b, 0);
    }

}
