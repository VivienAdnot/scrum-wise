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
    sliderInputs: number[];

    constructor(private workspaceService: WorkspaceService) {
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

}
