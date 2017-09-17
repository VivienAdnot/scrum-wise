import { Injectable } from '@angular/core';
import { PhaseModel } from '../models/phase.model';
import { phasesMock } from './phases.mock';

@Injectable()
export class WorkspaceService {
  pokerValues = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100];

  constructor() { }

  getPhases(): Promise<PhaseModel[]> {
      return Promise.resolve(phasesMock);
  }

  getPokerScore(score: number) {
      for(let currentValue of this.pokerValues) {
          if (score <= currentValue) {
              return currentValue;
          }
      }

      throw `score must be contained between 0 and ${Math.max(...this.pokerValues)}`;
  }
}
