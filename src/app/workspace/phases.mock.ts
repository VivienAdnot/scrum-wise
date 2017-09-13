import { PhaseModel } from '../models/phase.model';

export const phasesMock: PhaseModel[] = [
  {
      label: "analyse",
      id: 0,
      min: 0,
      max: 3,
      step: 1,
      defaultValue: 0
  },
  {
      label: "inconnu connu",
      id: 1,
      min: 0,
      max: 5,
      step: 1,
      defaultValue: 0
  },
  {
      label: "draft quick & dirty",
      id: 2,
      min: 1,
      max: 10,
      step: 1,
      defaultValue: 0
  },
  {
      label: "tests unitaires",
      id: 3,
      min: 0,
      max: 5,
      step: 1,
      defaultValue: 0
  },
  {
      label: "refactoring",
      id: 4,
      min: 0,
      max: 10,
      step: 1,
      defaultValue: 0
  },
  {
      label: "cleaning - pull request",
      id: 5,
      min: 0,
      max: 2,
      step: 1,
      defaultValue: 0
  },
  {
      label: "risque d'imprévu",
      id: 6,
      min: 0,
      max: 4,
      step: 1,
      defaultValue: 0
  },
]
