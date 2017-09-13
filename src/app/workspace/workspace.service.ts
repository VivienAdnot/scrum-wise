import { Injectable } from '@angular/core';
import { PhaseModel } from '../models/phase.model';
import { phasesMock } from './phases.mock';

@Injectable()
export class WorkspaceService {

  constructor() { }

  getPhases(): Promise<PhaseModel[]> {
      return Promise.resolve(phasesMock);
  }

}
