import { PhaseModel } from '../models/phase.model';

export const phasesMock: PhaseModel[] = [
  {
      label: "Analyse",
      id: 0,
      min: 0,
      max: 3,
      step: 0.5,
      defaultValue: 0
  },
  {
      label: "Inconnu connu",
      id: 1,
      min: 0,
      max: 5,
      step: 0.5,
      defaultValue: 0
  },
  {
      label: "Draft quick & dirty",
      id: 2,
      min: 0,
      max: 10,
      step: 0.5,
      defaultValue: 0
  },
  {
      label: "Tests unitaires",
      id: 3,
      min: 0,
      max: 5,
      step: 0.5,
      defaultValue: 0
  },
  {
      label: "Refactoring du draft",
      id: 4,
      min: 0,
      max: 10,
      step: 0.5,
      defaultValue: 0
  },
  {
      label: "Cleaning & pull request",
      id: 5,
      min: 0,
      max: 2,
      step: 0.5,
      defaultValue: 0
  },
  // {
  //     label: "Risque d'imprévu",
  //     id: 6,
  //     min: 0,
  //     max: 4,
  //     step: 1,
  //     defaultValue: 0
  // },
]
