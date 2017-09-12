import { Component, OnInit } from '@angular/core';

interface SliderListItem {
  label: string,
  id: number,
  min: number,
  max: number,
  step: number,
  defaultValue: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  total: number;

  sliderList: SliderListItem[] = [
    {
        label: "analyse - conception",
        id: 0,
        min: 0,
        max: 3,
        step: 1,
        defaultValue: 1
    },
    {
        label: "inconnu connu",
        id: 1,
        min: 0,
        max: 5,
        step: 1,
        defaultValue: 1
    },
    {
        label: "implémentation quick & dirty",
        id: 2,
        min: 1,
        max: 10,
        step: 1,
        defaultValue: 3
    },
    {
        label: "tests unitaires",
        id: 3,
        min: 0,
        max: 5,
        step: 1,
        defaultValue: 1
    },
    {
        label: "refactoring",
        id: 4,
        min: 0,
        max: 10,
        step: 1,
        defaultValue: 1
    },
    {
        label: "cleaning - pull request",
        id: 5,
        min: 0,
        max: 2,
        step: 1,
        defaultValue: 1
    },
    {
        label: "risque d'imprévu",
        id: 6,
        min: 0,
        max: 4,
        step: 1,
        defaultValue: 1
    },
  ]

  resultList = [];

  ngOnInit() {
      this.total = 0;
      for(let item of this.sliderList) {
          this.resultList.push(item.defaultValue);
      }
  }

  onChange(event, id) {
      this.resultList[id] = event.value;

      this.total = this.resultList.reduce((a, b) => a + b, 0);
  }
}
