import { Component, OnInit } from '@angular/core';
import { ScrumPokerService } from '../scrum-poker.service';

@Component({
  selector: 'poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.css']
})
export class PokerListComponent implements OnInit {
    pokerValues: number[];

    constructor(private pokerService: ScrumPokerService) { }

    ngOnInit() {
        this.pokerValues = this.pokerService.getPokerValues();
    }

}
