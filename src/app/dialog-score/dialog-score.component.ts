import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-score',
  templateUrl: './dialog-score.component.html',
  styleUrls: ['./dialog-score.component.css']
})
export class DialogScoreComponent {

  constructor(
      public dialogRef: MdDialogRef<DialogScoreComponent>,
      @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
      this.dialogRef.close();
  }

}
